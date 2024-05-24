import MagicString from "magic-string";
import {
	parse,
	type LegacyElementLike,
	type LegacyInlineComponent,
	type LegacyThenBlock,
	type SnippetBlock,
} from "svelte/compiler";
import { Project, SourceFile } from "ts-morph";
import type { Plugin as VitePlugin } from "vite";
import { walk } from "zimmerframe";
import { format } from "./printer";

const libReplacemenet = "@nais/ds-svelte-community";

// storyProcess walks through Svelte files, and adds the story source code as an
// attribute to the Story component.
export default function storyProcess(): VitePlugin {
	return {
		name: "dssc-docs",

		transform: {
			order: "pre",
			async handler(code, id) {
				if (!id.includes("routes/") || !id.endsWith(".svelte")) {
					return;
				}

				const ast = parse(code, {
					filename: id,
					modern: false,
				});

				if (!("html" in ast)) {
					return;
				}

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
					return;
				}

				const proj = new Project({
					compilerOptions: {
						lib: ["esnext"],
						noEmit: true,
						allowJs: true,
					},
				});

				const ts = code.slice(ast.instance!.content.start, ast.instance!.content.end);
				const s = new MagicString(code);
				console.log("Found stories in", id);

				const compiled: { name?: string; source: string; snippet: string; locked: boolean }[] = [];
				for (const story of stories) {
					const sf = proj.createSourceFile("story.ts", ts);
					// console.log("STORY IMPORTS", imports);
					const { source, snippet } = await formatStory(code, sf, story);

					if (source !== "") {
						const nn = story.attributes.find((a) => a.type === "Attribute" && a.name === "name");
						let name: string | undefined;
						if (nn) {
							// @ts-expect-error we know it's there
							name = nn.value[0].data as unknown as string;
						}

						const locked =
							story.attributes.find((a) => a.type === "Attribute" && a.name === "locked") !==
							undefined;

						compiled.push({
							name,
							source,
							snippet,
							locked,
						});
					}

					s.remove(story.start, story.end);
					proj.removeSourceFile(sf);
				}

				const attr: string[] = [];
				compiled.forEach((story, i) => {
					const snippetName = `docSnippet${i}`;

					let snippetContent = story.snippet;
					let props: { key: string; value: string }[] = [];
					let lockedProps: string[] = [];
					if (!story.locked) {
						const res = parseDocSnippet(snippetContent);
						if (res) {
							snippetContent =
								snippetContent.slice(0, res.propsIndex) +
								" {...docProps}" +
								snippetContent.slice(res.propsIndex);
							props = res.props;
							lockedProps = res.lockedProps;
						}
					}

					const snippet = `{#snippet ${snippetName}({docProps})}\n${snippetContent}\n{/snippet}\n`;
					attr.push(
						`{name: "${story.name || "Default"}", source: "${btoa(story.source)}", snippet: ${snippetName}, locked: ${story.locked}, props: ${JSON.stringify(props)}, lockedProps: ${JSON.stringify(lockedProps)}}`,
					);
					s.prependLeft(doc.start, snippet);
				});

				const attrStr = " stories={[" + attr.join(", ") + "]}";
				s.appendRight(doc!.start + ("<" + doc!.name).length, attrStr);

				console.log("---");
				console.log(s.toString());

				return s.toString();
			},
		},
	};
}

async function formatStory(
	code: string,
	sourceFile: SourceFile,
	story: LegacyInlineComponent,
): Promise<{
	source: string;
	snippet: string;
	docSnippet: boolean;
}> {
	const proj = new Project({
		compilerOptions: {
			lib: ["esnext"],
			noEmit: true,
			allowJs: true,
			sourceMap: true,
		},
	});

	const sf2 = proj.createSourceFile("story.ts", sourceFile.getText());

	const split = "export default 1457387;";
	sf2.insertText(sf2.getEnd(), "\n\n" + split + "\n\n");

	walk<LegacyElementLike, null>(story, null, {
		MustacheTag(node, { next }) {
			sf2.insertText(sf2.getEnd(), code.slice(node.start, node.end) + "\n");
			next();
		},
		InlineComponent(node, { next }) {
			if (node.name === "Story") {
				next();
				return;
			}
			sf2.insertText(sf2.getEnd(), "new " + code.slice(node.start, node.end) + "()\n");
			next();
		},
	});

	// Remove unused code and imports
	let lastWidth: number;
	do {
		lastWidth = sf2.getFullWidth();
		sf2.fixUnusedIdentifiers();
	} while (lastWidth !== sf2.getFullWidth());

	const ts = sf2.getText().split(split)[0].replaceAll("$lib", libReplacemenet);

	let docSnippet = false;

	//@ts-expect-error we know it's there
	const contentStart = story.children[0].start;
	//@ts-expect-error we know it's there
	const contentEnd = story.children[story.children.length - 1].end;
	const snippet = code.slice(contentStart, contentEnd);
	let contentSnippet = snippet;
	story.children.forEach((child) => {
		if ((child.type as string) !== "SnippetBlock") {
			return;
		}
		const snippetBlock = child as unknown as SnippetBlock;
		docSnippet = code.slice(snippetBlock.start, snippetBlock.end).indexOf("docProps") !== -1;
		contentSnippet = code.slice(
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
		docSnippet,
	};
}

function parseDocSnippet(snippet: string):
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
		return false;
	}

	const frag = ast.html as unknown as LegacyThenBlock;
	let comp: LegacyInlineComponent | undefined = undefined;
	for (const node of frag.children) {
		switch (node.type) {
			case "Text":
				if (node.data.trim() === "") {
					break;
				}
				return false;
			case "InlineComponent":
				if (comp !== undefined) {
					return false;
				}
				comp = node;
				break;
			default:
				return false;
		}
	}

	if (comp === undefined) {
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
