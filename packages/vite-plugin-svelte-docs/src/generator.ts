/*eslint no-unused-private-class-members: "error"*/

import path from "path";
import type * as tsm from "ts-morph";
import { Project, ts } from "ts-morph";
import { tsconfigResolver } from "tsconfig-resolver";

import { convert } from "./svelte.js";
import type {
	Doc,
	Snippet as DocSnippet,
	Interface,
	PObject,
	Prop,
	SlotLet,
	Slots,
	SvelteEvent,
	Type,
	TypeParameter,
} from "./types.js";

type ContextNode = {
	getKind(): ts.SyntaxKind;
	getText(): string;
};

class Context {
	parent?: Context;
	node: ContextNode;
	debug: boolean;
	numParents = 0;

	constructor(node: ContextNode, parent?: Context, debug: boolean = false) {
		this.node = node;
		this.parent = parent;
		this.debug = !!(debug || (parent && parent.debug));
		this.numParents = parent ? parent.numParents + 1 : 0;
	}

	toString(): string {
		let pre = "";
		if (this.parent) {
			pre = this.parent.toString() + "\n";
		}
		pre += "  ".repeat(this.numParents);
		return pre + this.toStringWithoutParent();
	}

	toStringWithoutParent(): string {
		switch (this.node.getKind()) {
			case ts.SyntaxKind.SourceFile:
				return "SourceFile";
		}

		return this.node.getText() + " [[" + ts.SyntaxKind[this.node.getKind()] + "]]";
	}

	log(...args: unknown[]) {
		if (!this.debug) {
			return;
		}
		console.log(this.toString(), ...args);
	}

	time(label: string) {
		if (!this.debug) {
			return;
		}

		console.time(label);
	}

	timeEnd(label: string) {
		if (!this.debug) {
			return;
		}
		console.timeEnd(label);
	}

	hasChecked(node: tsm.Node): boolean {
		if (this.node === node) {
			return true;
		}
		if (!this.parent) {
			return false;
		}
		return this.parent.hasChecked(node);
	}
}

export class Generator {
	#project?: Project;
	#svelte2tsxPath: string;
	#cache: Map<tsm.Node, Type> = new Map();

	/*
	 * Files that have been checked for various types
	 */
	#checkedFiles: Set<string> = new Set();

	constructor(svelte2tsxPath: string) {
		this.#svelte2tsxPath = svelte2tsxPath;
	}

	async setup() {
		const config = await tsconfigResolver({ cache: "always", ignoreExtends: true });

		this.#project = new Project({
			compilerOptions: {
				lib: ["esnext"],
				noEmit: true,
				allowJs: true,
			},
			tsConfigFilePath: config.path,
		});

		const svelteTsxFiles = ["./svelte-shims-v4.d.ts", "./svelte-jsx-v4.d.ts"].map((f) =>
			ts.sys.resolvePath(path.resolve(path.dirname(this.#svelte2tsxPath), f)),
		);

		this.#project.addSourceFilesAtPaths(svelteTsxFiles);
	}

	#renameFile(filename: string) {
		// replace .svelte with .ts to allow the file to be used in the project
		return filename.replace(/\.svelte$/, ".ts");
	}

	addSvelteFile(filename: string, code: string) {
		filename = this.#renameFile(filename);

		const dts = convert(filename, code);

		// console.log("-----------------");
		// console.log(dts);
		// console.log("-----------------");

		this.#project!.createSourceFile(filename, dts, { overwrite: true });
	}

	docFor(filename: string, debug = false): { doc: Doc; files: string[] } {
		filename = this.#renameFile(filename);

		const sourceFile = this.#project!.getSourceFileOrThrow(filename);
		if (!sourceFile) {
			throw new Error(`Source file ${filename} not found`);
		}

		const ctx = new Context(sourceFile, undefined, debug);
		const ret: Doc = {
			name: sourceFile.getBaseNameWithoutExtension(),
			description: "",
			props: [],
			slots: [],
			events: [],
		};

		let description = "";
		sourceFile.getExportSymbols().forEach((sym) => {
			// Only if default export
			if (sym.getName() !== "default") {
				return;
			}

			sourceFile.getExportedDeclarations().forEach((decl) => {
				decl.forEach((a) => {
					const nd = a.getSymbolOrThrow().compilerSymbol.getDocumentationComment(undefined);
					if (nd) {
						description = ts.displayPartsToString(nd);
					}
				});
			});
		});
		ret.description = description;

		const func = sourceFile.getFunction("render");
		if (!func) {
			throw new Error("No render function found");
		}

		ctx.time("func");
		const body = func.getBody()?.getChildren();
		if (!body) {
			throw new Error("No body found");
		}
		const bodySyntaxList = body[body.length - 2];
		if (!bodySyntaxList) {
			throw new Error("No bodyLet found");
		}
		if (!bodySyntaxList.isKind(ts.SyntaxKind.SyntaxList)) {
			throw new Error(
				"Expected variable statement, got " +
					bodySyntaxList.getKindName() +
					"\n" +
					bodySyntaxList.getText(),
			);
		}
		const variableStatements = bodySyntaxList
			.getChildrenOfKind(ts.SyntaxKind.VariableStatement)
			.filter((vs) => {
				return (
					vs.getDeclarations().filter((vsd) => {
						const ce = vsd.getChildrenOfKind(ts.SyntaxKind.CallExpression);
						if (ce.length != 1) {
							return false;
						}

						return !!(ce[0].getExpressionIfKind(ts.SyntaxKind.Identifier)?.getText() == "$props");
					}).length > 0
				);
			});
		if (variableStatements.length !== 1) {
			throw new Error("Expected 1 variable statement, got " + variableStatements.length);
		}
		const vs = variableStatements[0];
		const defaults: Record<string, tsm.Node> = {};
		vs.getDeclarations()[0].forEachChild((c) => {
			const cctx = new Context(c, ctx);
			switch (c.getKind()) {
				case ts.SyntaxKind.ObjectBindingPattern: {
					const props = c.getChildrenOfKind(ts.SyntaxKind.BindingElement);
					props.forEach((p) => {
						if (!p.hasInitializer()) {
							ctx.log("No initializer", p.getText());
							return;
						}

						const name = p.getNameNode().getText();
						const initializer = p.getInitializer();
						defaults[name] = initializer!;
					});
					break;
				}
				case ts.SyntaxKind.TypeReference: {
					const tr = c as tsm.TypeReferenceNode;
					let props = this.#typeOf(ctx, tr);

					if (
						Array.isArray(props) ||
						(props.type != "union" && props.type != "object" && props.type != "interface")
					) {
						cctx.log("Expected props to be object or union type", props);
						throw new Error("Expected props to be object or union");
					}

					const parseInterface = (i: Interface, combined: PObject, injectedInherits: string[]) => {
						const combine = (np: Prop) => {
							const existing = combined.properties.find((p) => p.name === np.name);
							if (existing) {
								if (existing.description == "") {
									existing.description = np.description;
								}
								if (existing.optional && !np.optional) {
									existing.optional = false;
								}
								if (existing.default == undefined && np.default != undefined) {
									existing.default = np.default;
								}
								if (!existing.bindable && np.bindable) {
									existing.bindable = true;
								}
								if (!Array.isArray(existing.type) && existing.type.type === "union") {
									existing.type.values.push(np.type);
								}
								return;
							}
							combined.properties.push(np);
						};
						i.members?.forEach(combine);
						if (i.inherits) {
							if (!Array.isArray(i.inherits)) {
								throw new Error("Expected inherits to be an array");
							}
							i.inherits.forEach((i) => {
								if (!Array.isArray(i) && i.type == "unknown") {
									return;
								}
								if (Array.isArray(i) || i.type != "interface") {
									cctx.log("Expected interface type in inherits", i);
									throw new Error(
										`Expected interface type in inherits, got ${Array.isArray(i) ? "array" : i.type}`,
									);
								}
								if (injectedInherits.includes(i.name)) {
									return;
								}
								i.members?.forEach(combine);
								injectedInherits.push(i.name);
							});
						}
					};

					if (props.type == "union") {
						// Combine all properties
						const combined: PObject = { type: "object", properties: [] };

						const injectedInherits: string[] = [];
						props.values.forEach((p) => {
							if (Array.isArray(p) || p.type != "interface") {
								cctx.log("Expected interface type in union", p);
								throw new Error(
									`Expected interface type in union, got ${Array.isArray(p) ? "array" : p.type}`,
								);
							}

							parseInterface(p, combined, injectedInherits);
						});

						props = combined;
					} else if (props.type == "interface") {
						const combined: PObject = { type: "object", properties: [] };
						parseInterface(props, combined, []);
						props = combined;
					}

					props.properties.forEach((p) => {
						ret.props.push(p);
						if (!Object.keys(defaults).includes(p.name)) {
							cctx.log("No default for prop", p.name);
							return;
						}
						const def = defaults[p.name];
						// Check if $bindable function call
						if (def.isKind(ts.SyntaxKind.CallExpression)) {
							const expr = def.getExpression();
							if (expr && expr.isKind(ts.SyntaxKind.Identifier) && expr.getText() == "$bindable") {
								p.bindable = true;
								const args = def.getArguments();
								if (args.length === 0) {
									return;
								} else if (args.length == 1) {
									p.default = args[0].getText();
									return;
								} else {
									throw new Error("Expected 1 argument for $bindable");
								}
							}
						} else {
							p.default = def.getText();
						}
					});

					break;
				}
				default:
					ctx.log("Unknown kind", c.getKindName());
					break;
			}
		});

		ctx.timeEnd("func");

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
						optional: !!p.optional,
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
		} else {
			ret.props = ret.props.filter((p) => {
				if (p.name === "children" && !Array.isArray(p.type) && p.type.type === "unknown") {
					return false;
				}
				return true;
			});
		}

		const sortFn = (a: Prop | Slots | SvelteEvent, b: Prop | Slots | SvelteEvent) => {
			if (a.optional && !b.optional) {
				return 1;
			}
			if (!a.optional && b.optional) {
				return -1;
			}
			return a.name.localeCompare(b.name);
		};

		ret.props = ret.props.sort(sortFn);
		ret.slots = ret.slots.sort(sortFn);
		ret.events = ret.events.sort(sortFn);

		this.#checkedFiles.delete(filename);
		const files = Array.from(this.#checkedFiles);

		return {
			files,
			doc: ret,
		};
	}

	#typeOf(parentContext: Context, node: tsm.Node): Type {
		if (this.#cache.has(node)) {
			return this.#cache.get(node)!;
		}

		const ret = this.#typeOfUncached(parentContext, node);
		this.#cache.set(node, ret);
		return ret;
	}
	#typeOfUncached(parentContext: Context, node: tsm.Node): Type {
		if (!node) {
			parentContext.log("No node");
			return { type: "unknown" };
		}
		if (parentContext.hasChecked(node)) {
			return { type: "unknown" };
		}
		const nodeFilePath = node.getSourceFile().getFilePath();
		if (nodeFilePath.indexOf("node_modules") < 0) {
			this.#checkedFiles.add(nodeFilePath);
		}

		const ctx = new Context(node, parentContext);

		ctx.log();
		switch (node.getKind()) {
			case ts.SyntaxKind.PropertySignature:
				return this.#typeOf(ctx, (node as tsm.PropertySignature).getTypeNodeOrThrow());
			case ts.SyntaxKind.UnionType:
				return {
					type: "union",
					values: (node as tsm.UnionTypeNode).getTypeNodes().map((t) => this.#typeOf(ctx, t)),
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
			case (ts.SyntaxKind.UnknownKeyword, ts.SyntaxKind.AnyKeyword):
				return { type: "unknown" };
			case ts.SyntaxKind.ImportType:
				return { type: "unknown" };
			case ts.SyntaxKind.IntersectionType:
				return {
					type: "union",
					values: (node as tsm.IntersectionTypeNode)
						.getTypeNodes()
						.map((t) => this.#typeOf(ctx, t)),
				};
			case ts.SyntaxKind.ArrayType:
				return {
					type: "array",
					of: this.#typeOf(ctx, (node as tsm.ArrayTypeNode).getElementTypeNode()),
				};
			case ts.SyntaxKind.TypeParameter:
				return { type: "typeParameter", name: (node as tsm.TypeParameterDeclaration).getName() };
			case ts.SyntaxKind.TypeReference:
				return this.#typeReference(ctx, node as tsm.TypeReferenceNode);
			case ts.SyntaxKind.ImportSpecifier:
				return this.#importSpecifier(ctx, node as tsm.ImportSpecifier);
			case ts.SyntaxKind.TypeAliasDeclaration:
				return this.#typeOf(ctx, (node as tsm.TypeAliasDeclaration).getTypeNodeOrThrow());
			case ts.SyntaxKind.InterfaceDeclaration: {
				const id = node as tsm.InterfaceDeclaration;

				const i: Interface = {
					type: "interface",
					name: id.getName(),
				};

				if (id.getSourceFile().getFilePath().indexOf("node_modules") >= 0) {
					i.external = true;

					if (
						id.getName() === "Element" &&
						id.getSourceFile().getFilePath().indexOf("/node_modules/typescript/lib/lib.dom.d.ts") >=
							0
					) {
						return i;
					}
				}

				i.members = id
					.getMembers()
					.map((m) => {
						if (!m.isKind(ts.SyntaxKind.PropertySignature)) {
							return;
						}
						return this.#propertySignature(new Context(m, ctx), m);
					})
					.filter((m) => m != undefined) as Prop[];

				const heritage = id.getHeritageClauses();
				if (heritage.length > 0) {
					i.inherits = heritage.map((h) => {
						return this.#typeOf(ctx, h.getTypeNodes()[0]);
					});
				}

				id.getTypeParameters().forEach((tp) => {
					const name = tp.getName();
					const constraint = tp.getConstraint();
					const tpp: TypeParameter = {
						type: "typeParameter",
						name,
					};
					i.typeArguments = i.typeArguments || [];
					if (constraint) {
						tpp.constraint = this.#typeOf(ctx, constraint);
					}
					i.typeArguments.push(tpp);
				});

				return i;
			}
			case ts.SyntaxKind.ExpressionWithTypeArguments: {
				const ewta = node as tsm.ExpressionWithTypeArguments;
				if (ewta.getTypeArguments().length > 0) {
					if (ewta.getExpressionIfKind(ts.SyntaxKind.Identifier)?.getText() == "Pick") {
						const type = ewta.getTypeArguments()[0];
						if (!type.isKind(ts.SyntaxKind.TypeReference)) {
							ctx.log("Expected type reference", type.getText());
							throw new Error("Expected type reference");
						}
						const o = this.#typeOf(ctx, type);
						if (Array.isArray(o) || o.type != "interface") {
							ctx.log("Expected interface type, got ", Array.isArray(o) ? "array" : o.type);
							throw new Error("Expected interface type");
						}

						const pick = ewta.getTypeArguments().slice(1);
						o.members = o.members?.filter((m) => {
							return pick.find((p) => {
								return p.getText().slice(1, -1) === m.name;
							});
						});
						return o;
					}

					// console.log("Expression with type argument");
					return { type: "unknown" };

					const type = ewta.getTypeArguments()[0];
					return this.#typeOf(ctx, type);
				}
				return this.#typeOf(ctx, ewta.getExpression());
			}
			case ts.SyntaxKind.PropertyAssignment:
				break;
			case ts.SyntaxKind.IndexedAccessType:
				return ((): Type => {
					const iatn = node as tsm.IndexedAccessTypeNode;
					const otn = iatn.getObjectTypeNode() as tsm.TypeReferenceNode;

					const lit = iatn.getIndexTypeNode();
					if (!lit.isKind(ts.SyntaxKind.LiteralType)) {
						if (lit.isKind(ts.SyntaxKind.NumberKeyword)) {
							return this.#typeOf(ctx, otn);
						}

						ctx.log("Expected literal type");
						throw new Error("Expected literal type, got " + lit.getKindName());
					}

					const slit = lit.getLiteral();
					if (!slit.isKind(ts.SyntaxKind.StringLiteral)) {
						ctx.log("Expected string literal");
						throw new Error("Expected string literal, got " + slit.getKindName());
					}

					let nodeToUse: tsm.Node | undefined;
					otn
						.getType()
						.getProperties()
						.forEach((p) => {
							if (p.getName() === slit.getLiteralValue()) {
								nodeToUse = p.getValueDeclarationOrThrow();
							}
						});

					if (!nodeToUse) {
						ctx.log("Unable to find index");
						throw new Error("Unable to find index");
					}

					return this.#typeOf(ctx, nodeToUse);
				})();
			case ts.SyntaxKind.ParenthesizedType:
				return this.#parenthesizedType(ctx, node as tsm.ParenthesizedTypeNode);
			case ts.SyntaxKind.TypeQuery:
				return this.#typeOf(ctx, (node as tsm.TypeQueryNode).getExprName());
			case ts.SyntaxKind.Identifier:
				return this.#identifier(ctx, node as tsm.Identifier);
			case ts.SyntaxKind.VariableDeclaration:
				return this.#typeOf(
					ctx,
					(node as tsm.VariableDeclaration).getInitializerOrThrow("Initializer not found"),
				);
			case ts.SyntaxKind.AsExpression:
				return this.#typeOf(ctx, (node as tsm.AsExpression).getExpression());
			case ts.SyntaxKind.ArrayLiteralExpression:
				return {
					type: "union",
					values: (node as tsm.ArrayLiteralExpression)
						.getElements()
						.map((e) => this.#typeOf(ctx, e)),
				};
			case ts.SyntaxKind.StringLiteral:
				return { type: "literal", value: node.getText() };
			case ts.SyntaxKind.TypeOperator: {
				const totn = node as tsm.TypeOperatorTypeNode;

				if (totn.getChildrenOfKind(ts.SyntaxKind.KeyOfKeyword).length > 0) {
					return this.#keyof(ctx, totn);
				}
				console.log("TypeOperator not supported", totn.getText());
				break;
			}
			case ts.SyntaxKind.TypeLiteral:
				// ctx.log("TypeLiteral", (node as tsm.TypeLiteralNode).getMembers()[0].getText());
				return this.#typeLiteral(ctx, node as tsm.TypeLiteralNode);
			// return this.typeOf(ctx, (node as tsm.TypeLiteralNode).getMembers()[0]);
			// return this.typeOf((node as tsm.VariableStatement).);
		}

		console.log(" unknown kind", node.getKindName(), node.getText());
		return { type: "unknown" };
	}

	#keyof(ctx: Context, node: tsm.TypeOperatorTypeNode): Type {
		const type = this.#typeOf(ctx, node.getTypeNode());
		if (Array.isArray(type) || (type.type != "object" && type.type != "interface")) {
			if (!Array.isArray(type) && type.type === "unknown") {
				return { type: "unknown" };
			}
			ctx.log("Expected object type", type);
			throw new Error(
				"Expected object type, got " + (Array.isArray(type) ? "array of types" : type.type),
			);
		}
		let keys: string[];

		if (type.type === "object") {
			keys = type.properties.map((p) => {
				return p.name;
			});
		} else if (type.type === "interface") {
			keys =
				type.members?.map((m) => {
					return m.name;
				}) || [];
		} else {
			throw new Error("Unknown type");
		}
		return { type: "union", values: keys.map((k) => ({ type: "literal", value: `"${k}"` })) };
	}

	#typeLiteral(ctx: Context, node: tsm.TypeLiteralNode): Type {
		const members = node.getMembers();
		const lets: Prop[] = [];
		members.forEach((m) => {
			if (!m.isKind(ts.SyntaxKind.PropertySignature)) {
				return;
			}
			lets.push(this.#propertySignature(ctx, m as tsm.PropertySignature));
		});
		return { type: "object", properties: lets };
	}

	#propertySignature(ctx: Context, ps: tsm.PropertySignature): Prop {
		const name = ps.getName();
		const optional = ps.hasQuestionToken();
		const type = this.#typeOf(ctx, ps.getTypeNodeOrThrow());
		const description = ts.displayPartsToString(
			ps.getSymbolOrThrow().compilerSymbol.getDocumentationComment(undefined),
		);
		return { name, type, description, optional };
	}

	#parenthesizedType(ctx: Context, node: tsm.ParenthesizedTypeNode): Type {
		const children: tsm.Node[] = [];
		node.forEachChild((c) => {
			children.push(c);
		});
		if (children.length === 1) {
			return this.#typeOf(ctx, children[0]);
		}

		throw new Error("Multiple children in parenthesized type for " + node.getText());
	}

	#importSpecifier(ctx: Context, node: tsm.ImportSpecifier): Type {
		let sym = node.getNameNode().getSymbolOrThrow();
		if (sym.isAlias()) {
			sym = sym.getAliasedSymbolOrThrow();
		}

		return this.#typeOf(ctx, sym.getDeclarations()[0]);
	}

	#identifier(ctx: Context, node: tsm.Identifier): Type {
		const sym = node.getSymbolOrThrow();
		if (sym.isAlias()) {
			return this.#typeOf(ctx, sym.getAliasedSymbolOrThrow().getDeclarations()[0]);
		}
		const decl = sym.getDeclarations()[0];
		if (!decl) {
			return { type: "unknown" };
		}
		return this.#typeOf(ctx, decl);
	}

	#typeReference(ctx: Context, node: tsm.TypeReferenceNode): Type {
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
					ctx.log(
						"Multiple type arguments",
						tas.map((t) => t.getText()),
					);
					throw new Error("Multiple type arguments");
				}
				const type = tas[0];
				if (type.isKind(ts.SyntaxKind.TupleType)) {
					const tuple = type as tsm.TupleTypeNode;
					const tctx = new Context(tuple, ctx);
					const types = tuple.getElements().map((e, i): SlotLet => {
						return { name: `let_${i}`, type: this.#typeOf(tctx, e) };
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
			ctx.log(" Expected symbol");
			console.log("Expected symbol");
			return { type: "unknown" };
		}

		const decl = symbol.getDeclarations()[0];
		return this.#typeOf(ctx, decl);
	}
}
