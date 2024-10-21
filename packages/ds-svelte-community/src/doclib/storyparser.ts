import MagicString from "magic-string";
import {
	parse,
	type LegacyElementLike,
	type LegacyInlineComponent,
	type LegacyThenBlock,
	type SnippetBlock,
} from "svelte/compiler";
import { Project } from "ts-morph";
import { walk } from "zimmerframe";
import { format, removeAttrs } from "./printer";

type CompiledStory = { name?: string; source: string; snippet: string; locked: boolean };

export enum LogLevel {
	none,
	error,
	warn,
	all,
}

export class StoryParser {
	private libReplacement: string;
	private code: string = "";
	private magicString: MagicString = new MagicString("");
	private logLevel: LogLevel = LogLevel.error;

	constructor(libReplacement: string, logLevel: LogLevel = LogLevel.error) {
		this.libReplacement = libReplacement;
		this.logLevel = logLevel;
	}

	async parse(code: string, id: string) {
		const ast = parse(code, {
			filename: id,
			modern: false,
		});

		if (!("html" in ast)) {
			return null;
		}

		this.code = code;
		this.magicString = new MagicString(code);

		const stories: LegacyInlineComponent[] = [];
		let doc: LegacyInlineComponent;
		walk(ast.html, null, {
			InlineComponent(node, { next }) {
				if (node.name == "Story" && node.children.length > 0) {
					stories.push(node);
				}
				if (node.name == "Doc") {
					doc = node;
				}
				next();
			},
		});

		if (stories.length === 0) {
			return null;
		}

		const ts = code.slice(ast.instance!.content.start, ast.instance!.content.end);
		const compiled: CompiledStory[] = [];
		const attrStories: string[] = [];
		let index = 0;
		for (const story of stories) {
			const ret = await this.parseStory(story, ts);
			if (!ret) {
				continue;
			}
			compiled.push(ret);

			let storyName = "Default";
			const nn = story.attributes.find((a) => a.type === "Attribute" && a.name === "name");
			if (nn) {
				// @ts-expect-error we know it's there
				storyName = nn.value[0].data as unknown as string;
			}

			const snippetName = `docSnippet${index++}`;
			attrStories.push(
				`{name: "${storyName}", source: "${btoa(ret.source)}", snippet: ${snippetName}, locked: ${ret.locked}, props: ${JSON.stringify(ret.props)}, lockedProps: ${JSON.stringify(ret.lockedProps)}}`,
			);

			const snippet = `{#snippet ${snippetName}({docProps}: { docProps: { [key: string]: unknown } })}\n${ret.snippet}\n{/snippet}\n`;
			this.magicString.prependLeft(doc!.start, snippet);
		}

		// compiled.forEach((story, i) => {
		// 	const snippetName = `docSnippet${i}`;

		// 	let snippetContent = story.snippet;
		// 	let props: { key: string; value: string }[] = [];
		// 	let lockedProps: string[] = [];
		// 	if (!story.locked) {
		// 		const res = parseDocSnippet(snippetContent);
		// 		if (res) {
		// 			snippetContent =
		// 				snippetContent.slice(0, res.propsIndex) +
		// 				" {...docProps}" +
		// 				snippetContent.slice(res.propsIndex);
		// 			props = res.props;
		// 			lockedProps = res.lockedProps;
		// 		}
		// 	}

		// 	const snippet = `{#snippet ${snippetName}({docProps})}\n${snippetContent}\n{/snippet}\n`;
		// 	attr.push(
		// 		`{name: "${story.name || "Default"}", source: "${btoa(story.source)}", snippet: ${snippetName}, locked: ${story.locked}, props: ${JSON.stringify(props)}, lockedProps: ${JSON.stringify(lockedProps)}}`,
		// 	);
		// 	s.prependLeft(doc.start, snippet);
		// });

		const attrStr = " stories={[" + attrStories.join(", ") + "]}";
		this.magicString.appendRight(doc!.start + ("<" + doc!.name).length, attrStr);

		// console.log("---");
		// console.log(s.toString());

		return this.magicString.toString();
	}

	private log(...args: unknown[]) {
		if (this.logLevel >= LogLevel.all) {
			console.log(...args);
		}
	}

	private warn(...args: unknown[]) {
		if (this.logLevel >= LogLevel.warn) {
			console.warn(...args);
		}
	}

	private error(...args: unknown[]) {
		if (this.logLevel >= LogLevel.error) {
			console.error(...args);
		}
	}

	private async parseStory(story: LegacyInlineComponent, script: string) {
		const { source, snippet } = await this.formatStory(script, story);

		if (source === "") {
			this.error("Failed to format story", story);
			return null;
		}

		const nn = story.attributes.find((a) => a.type === "Attribute" && a.name === "name");
		let name: string | undefined;
		if (nn) {
			// @ts-expect-error we know it's there
			name = nn.value[0].data as unknown as string;
		}

		const locked =
			story.attributes.find((a) => a.type === "Attribute" && a.name === "locked") !== undefined;

		if (locked) {
			this.log("Locked story", name);
			return {
				name,
				source,
				snippet,
				locked,
				props: [],
				lockedProps: [],
			};
		}
		const res = this.parseDocSnippet(snippet);
		if (!res) {
			this.warn("Failed to parse doc snippet");
			return null;
		}

		let snippetContent = snippet;
		snippetContent =
			snippetContent.slice(0, res.propsIndex) +
			" {...docProps}" +
			snippetContent.slice(res.propsIndex);

		this.magicString.remove(story.start, story.end);
		return {
			name,
			source: await removeAttrs(
				source,
				res.props.map((p) => p.key),
			),
			snippet: snippetContent,
			locked,
			props: res.props,
			lockedProps: res.lockedProps,
		};
	}

	private async formatStory(script: string, story: LegacyInlineComponent) {
		const proj = new Project({
			compilerOptions: {
				lib: ["esnext"],
				noEmit: true,
				allowJs: true,
				sourceMap: true,
			},
		});
		const sourceFile = proj.createSourceFile("story_format.ts", script);

		const split = "export default 1457387;";
		sourceFile.insertText(sourceFile.getEnd(), "\n\n" + split + "\n\n");

		walk<LegacyElementLike, null>(story, null, {
			MustacheTag: (node, { next }) => {
				sourceFile.insertText(sourceFile.getEnd(), this.code.slice(node.start, node.end) + "\n");
				next();
			},
			InlineComponent: (node, { next }) => {
				if (node.name === "Story") {
					next();
					return;
				}
				sourceFile.insertText(sourceFile.getEnd(), "new " + node.name + "()\n");
				next();
			},
		});

		// Remove unused code and imports
		let lastWidth: number;
		do {
			lastWidth = sourceFile.getFullWidth();
			sourceFile.fixUnusedIdentifiers();
		} while (lastWidth !== sourceFile.getFullWidth());

		const ts = sourceFile.getText().split(split)[0].replaceAll("$lib", this.libReplacement);

		//@ts-expect-error we know it's there
		const contentStart = story.children[0].start;
		//@ts-expect-error we know it's there
		const contentEnd = story.children[story.children.length - 1].end;
		const snippet = this.code.slice(contentStart, contentEnd);
		let contentSnippet = snippet;
		story.children.forEach((child) => {
			if ((child.type as string) !== "SnippetBlock") {
				return;
			}
			const snippetBlock = child as unknown as SnippetBlock;
			// docSnippet = code.slice(snippetBlock.start, snippetBlock.end).indexOf("docProps") !== -1;
			contentSnippet = this.code.slice(
				//@ts-expect-error we know it's there
				snippetBlock.children[0].start,
				//@ts-expect-error we know it's there
				snippetBlock.children[snippetBlock.children.length - 1].end,
			);
		});

		const content = `<script lang="ts">${ts}</script>\n\n${contentSnippet}`;

		return {
			source: await format(content),
			snippet: snippet,
		};
	}

	private parseDocSnippet(snippet: string):
		| {
				propsIndex: number;
				props: { key: string; value: string }[];
				lockedProps: string[];
		  }
		| false {
		const ast = parse(snippet, {
			filename: "docSnippet.svelte",
			modern: false,
		});

		//@ts-expect-error we know it's there
		if (ast.html.type !== "Fragment") {
			this.log("Not a fragment", ast.html.type);
			return false;
		}

		const frag = ast.html as unknown as LegacyThenBlock;
		let comp: LegacyInlineComponent | undefined = undefined;
		for (const node of frag.children) {
			switch (node.type) {
				case "Text": {
					if (node.data.trim() === "") {
						break;
					}
					this.warn("Unexpected text node", node.data);
					return false;
				}
				case "InlineComponent": {
					if (comp !== undefined) {
						return false;
					}
					comp = node;
					break;
				}
				// default:
				// 	this.log("Unexpected node", node.type);
				// 	return false;
			}
		}

		if (comp === undefined) {
			this.warn("No component found");
			return false;
		}

		const props: { key: string; value: string }[] = [];
		const lockedProps: string[] = [];
		let propsIndex = comp.start + ("<" + comp?.name).length;

		if (comp.attributes && comp.attributes.length > 0) {
			propsIndex = comp.attributes[comp.attributes.length - 1].end;
		}

		for (const attr of comp.attributes) {
			if (attr.type !== "Attribute") {
				if (attr.type === "Binding") {
					lockedProps.push(attr.name);
					continue;
				}
				this.warn("Unexpected attribute", attr.type);
				return false;
			}

			if (attr.value === true) {
				props.push({ key: attr.name, value: "true" });
			} else if (
				Array.isArray(attr.value) &&
				attr.value.length === 1 &&
				attr.value[0].type === "Text"
			) {
				const value = attr.value[0];
				props.push({ key: attr.name, value: JSON.stringify(value.data) });
			} else {
				lockedProps.push(attr.name);
			}
			// if (attr.value.length !== 1) {
			// 	return false;
			// }
			// const value = attr.value[0];
			// if (value.type !== "Text") {
			// 	return false;
			// }
			// props.push({ key: attr.name, value: value.data });
		}

		return { propsIndex, props, lockedProps };
	}
}
