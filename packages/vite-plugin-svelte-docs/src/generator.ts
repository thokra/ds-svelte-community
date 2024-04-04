import path from "path";
import type * as tsm from "ts-morph";
import { Project, ts } from "ts-morph";

import { convert } from "./svelte.js";
import type {
	Doc,
	Snippet as DocSnippet,
	Prop,
	SlotLet,
	Slots,
	SvelteEvent,
	Type,
} from "./types.js";

type ContextNode = {
	getKind(): ts.SyntaxKind;
	getText(): string;
};

class Context {
	parent?: Context;
	node: ContextNode;
	debug: boolean;

	constructor(node: ContextNode, parent?: Context, debug: boolean = false) {
		this.node = node;
		this.parent = parent;
		this.debug = !!(debug || (parent && parent.debug));
	}

	public toString(): string {
		let pre = "";
		if (this.parent) {
			pre = this.parent.toString() + " -> ";
		}

		return pre + this.toStringWithoutParent();
	}

	public toStringWithoutParent(): string {
		switch (this.node.getKind()) {
			case ts.SyntaxKind.SourceFile:
				return "SourceFile";
		}

		return this.node.getText();
	}

	public log(...args: unknown[]) {
		if (!this.debug) {
			return;
		}
		console.log(this.toString(), ...args);
	}

	public time(label: string) {
		if (!this.debug) {
			return;
		}

		console.time(this.toStringWithoutParent() + ": " + label);
	}

	public timeEnd(label: string) {
		if (!this.debug) {
			return;
		}
		console.timeEnd(this.toStringWithoutParent() + ": " + label);
	}
}

export class Generator {
	private project: Project;

	constructor(svelte2tsxPath: string) {
		this.project = new Project({
			compilerOptions: {
				lib: ["esnext"],
				noEmit: true,
			},
		});

		const svelteTsxFiles = ["./svelte-shims-v4.d.ts", "./svelte-jsx-v4.d.ts"].map((f) =>
			ts.sys.resolvePath(path.resolve(path.dirname(svelte2tsxPath), f)),
		);

		this.project.addSourceFilesAtPaths(svelteTsxFiles);
	}

	renameFile(filename: string) {
		// replace .svelte with .ts to allow the file to be used in the project
		return filename.replace(/\.svelte$/, ".ts");
	}

	public addSvelteFile(filename: string, code: string) {
		filename = this.renameFile(filename);

		const dts = convert(filename, code);

		this.project.createSourceFile(filename, dts, { overwrite: true });
	}

	public docFor(filename: string, debug = false): Doc {
		filename = this.renameFile(filename);

		const sourceFile = this.project.getSourceFileOrThrow(filename);
		if (!sourceFile) {
			throw new Error(`Source file ${filename} not found`);
		}

		const ctx = new Context(sourceFile, undefined, debug);
		const ret: Doc = {
			description: "",
			props: [],
			slots: [],
			events: [],
		};

		const des = sourceFile.getDescendantsOfKind(ts.SyntaxKind.TypeAliasDeclaration);

		sourceFile.getExportSymbols().forEach((sym) => {
			// Only if default export
			if (sym.getName() !== "default") {
				return;
			}

			const description = ts.displayPartsToString(
				sym.compilerSymbol.getDocumentationComment(undefined),
			);

			ret.description = description;
		});

		ctx.time("forEach");
		des.forEach((node) => {
			const nctx = new Context(node, ctx);
			const name = node.getName();
			if (name.endsWith("Slots")) {
				nctx.time("slots");
				ret.slots = this.parseSlots(nctx, node);
				nctx.timeEnd("slots");
			} else if (name.endsWith("Props") || name.endsWith("Props_")) {
				nctx.time("props");
				ret.props = this.parseProps(nctx, node);
				nctx.timeEnd("props");
			} else if (name.endsWith("Events")) {
				nctx.time("events");
				ret.events = this.parseEvents(nctx, node);
				nctx.timeEnd("events");
			} else {
				nctx.log("Unknown type alias", name);
			}
		});
		ctx.timeEnd("forEach");

		if (ret.slots.length === 0) {
			ret.slots = ret.props
				.filter((p) => {
					return !Array.isArray(p.type) && p.type.type === "snippet";
				})
				.map((p) => {
					const s = p.type as DocSnippet;
					return {
						name: p.name,
						lets: s.lets,
						description: p.description,
						snippet: true,
					};
				});

			ret.events = ret.props
				.filter((p) => {
					return !Array.isArray(p.type) && p.type.type === "function";
				})
				.map((p) => {
					const ret = {
						name: p.name,
						description: p.description,
						type: p.type,
					} as SvelteEvent;
					if (p.optional !== undefined) {
						ret.optional = p.optional;
					}
					return ret;
				});

			ret.props = ret.props.filter((p) => {
				if (Array.isArray(p.type)) {
					return true;
				}

				switch (p.type.type) {
					case "snippet":
					case "function":
						return false;
				}
				return true;
			});
		}

		return ret;
	}

	parseEvents(ctx: Context, node: tsm.TypeAliasDeclaration): SvelteEvent[] {
		const properties = node.getType().getProperties();

		return properties
			.map((prop): SvelteEvent | null => {
				const name = prop.getName();
				const description = ts.displayPartsToString(
					prop.compilerSymbol.getDocumentationComment(undefined),
				);

				if (prop.getFullyQualifiedName().includes("node_modules")) {
					return null;
				}

				return {
					name,
					description,
				};
			})
			.filter((p): p is SvelteEvent => !!p);
	}

	parseSlots(ctx: Context, node: tsm.TypeAliasDeclaration) {
		const properties = node.getType().getProperties();

		return properties
			.map((prop): Slots | null => {
				const name = prop.getName();
				const description = ts.displayPartsToString(
					prop.compilerSymbol.getDocumentationComment(undefined),
				);

				if (prop.getFullyQualifiedName().includes("node_modules")) {
					return null;
				}

				// Node:
				const node = prop.getValueDeclaration();
				if (!node) {
					return null;
				}

				const lets = node
					.getType()
					.getProperties()
					.map((prop): SlotLet | null => {
						const name = prop.getName();
						// const description = ts.displayPartsToString(
						// 	prop.compilerSymbol.getDocumentationComment(undefined),
						// );

						if (prop.getFullyQualifiedName().includes("node_modules")) {
							return null;
						}

						// Node:
						const node = prop.getValueDeclaration();
						if (!node) {
							return null;
						}
						return {
							name,
							type: this.typeOf(node),
						};
					})
					.filter((p): p is SlotLet => !!p);

				return {
					name,
					description,
					lets,
				};
			})
			.filter((p): p is Slots => !!p);
	}

	parseProps(ctx: Context, node: tsm.TypeAliasDeclaration): Prop[] {
		ctx.time("getType");
		const type = node.getType();
		ctx.timeEnd("getType");
		ctx.time("getProps");
		const properties = type.getProperties();
		ctx.timeEnd("getProps");

		return properties
			.map((prop): Prop | null => {
				const name = prop.getName();
				ctx.time("prop_" + name);
				const description = ts.displayPartsToString(
					prop.compilerSymbol.getDocumentationComment(undefined),
				);

				if (prop.getFullyQualifiedName().includes("node_modules")) {
					return null;
				}

				// Node:
				const node = prop.getValueDeclaration();
				if (!node) {
					return null;
				}
				ctx.timeEnd("prop_" + name);
				return {
					name,
					type: this.typeOf(node),
					description,
					optional: prop.isOptional(),
				};
			})
			.filter((p): p is Prop => !!p);
	}

	typeOf(node: tsm.Node): Type {
		switch (node.getKind()) {
			case ts.SyntaxKind.PropertySignature:
				return this.typeOf((node as tsm.PropertySignature).getTypeNodeOrThrow());
			case ts.SyntaxKind.UnionType:
				return {
					type: "union",
					values: (node as tsm.UnionTypeNode).getTypeNodes().map((t) => this.typeOf(t)),
				};
			case ts.SyntaxKind.LiteralType:
				return { type: "literal", value: (node as tsm.LiteralTypeNode).getText() };
			case ts.SyntaxKind.StringKeyword:
				return { type: "string" };
			case ts.SyntaxKind.NumberKeyword:
				return { type: "number" };
			case ts.SyntaxKind.BooleanKeyword:
				return { type: "boolean" };
			case ts.SyntaxKind.UndefinedKeyword:
				return { type: "undefined" };
			case ts.SyntaxKind.NullKeyword:
				return { type: "null" };
			case ts.SyntaxKind.FunctionType:
				return { type: "function", signature: node.getText() };
			case ts.SyntaxKind.TypeReference:
				return this.typeReference(node as tsm.TypeReferenceNode);
			case ts.SyntaxKind.ImportSpecifier:
				return this.importSpecifier(node as tsm.ImportSpecifier);
			case ts.SyntaxKind.TypeAliasDeclaration:
				return this.typeOf((node as tsm.TypeAliasDeclaration).getTypeNodeOrThrow());
			case ts.SyntaxKind.InterfaceDeclaration:
				return { type: "interface", name: (node as tsm.InterfaceDeclaration).getName() };
			case ts.SyntaxKind.IndexedAccessType:
				return this.typeOf((node as tsm.IndexedAccessTypeNode).getObjectTypeNode());
			case ts.SyntaxKind.ParenthesizedType:
				return this.parenthesizedType(node as tsm.ParenthesizedTypeNode);
			case ts.SyntaxKind.TypeQuery:
				return this.typeOf((node as tsm.TypeQueryNode).getExprName());
			case ts.SyntaxKind.Identifier:
				return this.identifier(node as tsm.Identifier);
			case ts.SyntaxKind.VariableDeclaration:
				return this.typeOf(
					(node as tsm.VariableDeclaration).getInitializerOrThrow("Initializer not found"),
				);
			case ts.SyntaxKind.AsExpression:
				return this.typeOf((node as tsm.AsExpression).getExpression());
			case ts.SyntaxKind.ArrayLiteralExpression:
				return {
					type: "union",
					values: (node as tsm.ArrayLiteralExpression).getElements().map((e) => this.typeOf(e)),
				};
			case ts.SyntaxKind.StringLiteral:
				return { type: "literal", value: (node as tsm.StringLiteral).getLiteralValue() };
			// return this.typeOf((node as tsm.VariableStatement).);
		}

		console.log(" unknown kind", node.getKindName(), node.getText());
		return { type: "unknown" };
	}

	parenthesizedType(node: tsm.ParenthesizedTypeNode): Type {
		const children: tsm.Node[] = [];
		node.forEachChild((c) => {
			children.push(c);
		});
		if (children.length === 1) {
			return this.typeOf(children[0]);
		}

		throw new Error("Multiple children in parenthesized type for " + node.getText());
	}

	importSpecifier(node: tsm.ImportSpecifier): Type {
		let sym = node.getNameNode().getSymbolOrThrow();
		if (sym.isAlias()) {
			sym = sym.getAliasedSymbolOrThrow();
		}
		return this.typeOf(sym.getDeclarations()[0]);
	}

	identifier(node: tsm.Identifier): Type {
		const sym = node.getSymbolOrThrow();
		if (sym.isAlias()) {
			return this.typeOf(sym.getAliasedSymbolOrThrow().getDeclarations()[0]);
		}
		const decl = sym.getDeclarations()[0];
		if (!decl) {
			return { type: "unknown" };
		}
		return this.typeOf(decl);
	}

	typeReference(node: tsm.TypeReferenceNode): Type {
		// node.
		// const type = node.getType();
		// const symbol = type.getSymbol();
		// if (!symbol) {
		// 	return { type: "unknown" };
		// }

		// const decl = symbol.getDeclarations()[0];
		// if (!decl) {
		// 	return { type: "unknown" };
		// }

		if (node.getTypeName().getText() === "Snippet") {
			const tas = node.getTypeArguments();
			if (tas.length > 0) {
				if (tas.length > 1) {
					console.log(
						"Multiple type arguments",
						tas.map((t) => t.getText()),
					);
					throw new Error("Multiple type arguments");
				}
				const type = tas[0];
				if (type.isKind(ts.SyntaxKind.TupleType)) {
					const tuple = type as tsm.TupleTypeNode;
					const types = tuple.getElements().map((e, i): SlotLet => {
						return { name: `let_${i}`, type: this.typeOf(e) };
					});
					return { type: "snippet", lets: types };
				} else {
					throw new Error("Unknown type argument");
				}
			}
			return { type: "snippet", lets: [] };
		}

		const symbol = node.getTypeName().getSymbol();
		if (!symbol) {
			console.log(" Expected symbol");
			return { type: "unknown" };
		}

		const decl = symbol.getDeclarations()[0];
		return this.typeOf(decl);
	}
}

export function typekind(typ: tsm.Type<ts.Type>) {
	if (typ.isAnonymous()) {
		return "Anonymous";
	}
	if (typ.isAny()) {
		return "Any";
	}
	if (typ.isArray()) {
		return "Array";
	}
	if (typ.isBoolean()) {
		return "Boolean";
	}
	if (typ.isBooleanLiteral()) {
		return "BooleanLiteral";
	}
	if (typ.isClass()) {
		return "Class";
	}
	if (typ.isClassOrInterface()) {
		return "ClassOrInterface";
	}
	if (typ.isEnum()) {
		return "Enum";
	}
	if (typ.isEnumLiteral()) {
		return "EnumLiteral";
	}
	if (typ.isInterface()) {
		return "Interface";
	}
	if (typ.isIntersection()) {
		return "Intersection";
	}
	if (typ.isLiteral()) {
		return "Literal";
	}
	if (typ.isNever()) {
		return "Never";
	}
	if (typ.isNull()) {
		return "Null";
	}
	if (typ.isNullable()) {
		return "Nullable";
	}
	if (typ.isNumber()) {
		return "Number";
	}
	if (typ.isNumberLiteral()) {
		return "NumberLiteral";
	}
	if (typ.isObject()) {
		return "Object";
	}
	if (typ.isReadonlyArray()) {
		return "ReadonlyArray";
	}
	if (typ.isString()) {
		return "String";
	}
	if (typ.isStringLiteral()) {
		return "StringLiteral";
	}
	if (typ.isTemplateLiteral()) {
		return "TemplateLiteral";
	}
	if (typ.isTuple()) {
		return "Tuple";
	}
	if (typ.isTypeParameter()) {
		return "TypeParameter";
	}
	if (typ.isUndefined()) {
		return "Undefined";
	}
	if (typ.isUnion()) {
		return "Union";
	}
	if (typ.isUnionOrIntersection()) {
		return "UnionOrIntersection";
	}
	if (typ.isUnknown()) {
		return "Unknown";
	}
	if (typ.isVoid()) {
		return "Void";
	}

	return "Unknown";
}
