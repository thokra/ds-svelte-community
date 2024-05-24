import * as prettier from "prettier";
import type { PrettierConfig } from "prettier-plugin-svelte";
import { parse, type LegacySvelteNode } from "svelte/compiler";

export async function format(code: string) {
	const formatConfig: PrettierConfig = {
		parser: "svelte",
		singleQuote: false,
		trailingComma: "all",
		useTabs: true,
		overrides: [{ files: "*.svelte", options: { parser: "svelte" } }],
		printWidth: 1000,
		plugins: ["prettier-plugin-svelte"],
	};

	return await prettier.format(code, formatConfig);
}

export async function removeAttrs(code: string, attrsToRemove: string[]) {
	const ast = parse(code);
	if ((ast.html.type as string) !== "Fragment") {
		throw new Error("Expected Fragment");
	}

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const children = (ast.html as any).children as LegacySvelteNode[];
	if (children.length !== 1) {
		throw new Error("Expected single child");
	}

	const child = children[0];
	if (child.type !== "InlineComponent") {
		throw new Error(`Expected InlineComponent, got ${child.type}`);
	}

	const remove = new Set<{ start: number; end: number }>();
	let lastAttrPos = child.start + ("<" + child.name).length;
	for (const attr of child.attributes) {
		if (attr.type !== "Attribute") {
			throw new Error(`Expected Attribute, got ${attr.type}`);
		}

		if (attrsToRemove.includes(attr.name)) {
			remove.add(attr);
		}

		lastAttrPos = attr.end;
	}

	let ret = code;
	let offset = 0;
	for (const attr of remove) {
		ret = ret.slice(0, attr.start - offset) + ret.slice(attr.end - offset);
		offset += attr.end - attr.start;
	}

	// Add {docProps} as the last argument
	ret = ret.slice(0, lastAttrPos - offset) + "{docProps}" + ret.slice(lastAttrPos - offset);
	return await format(ret);
}
