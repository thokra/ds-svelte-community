import type { RenderResult } from "@testing-library/svelte";
import * as Diff from "diff";
import prettier from "prettier";
import htmlPrettier from "prettier/parser-html";
import type { FunctionComponent, ReactNode } from "react";
import React from "react";
import * as ReactDOMServer from "react-dom/server";
import type { SvelteComponent } from "svelte";

export type ReactComponent = unknown;

export type DiffOptions = {
	ignoreSpaces?: boolean;
	ignoreComments?: boolean;
	ignoreClasses?: string[];
	before?: number;
	after?: number;

	/**
	 * Alter the value of an attribute on a before comparing.
	 */
	alterAttrValue?: (name: string, value: string) => string;
	/**
	 * Select which attributes to compare.
	 */
	compareAttrs?: (node: HTMLElement, attr: string) => boolean;

	/**
	 * Select which elements to ignore.
	 */
	ignoreElementFromA?: (tag: HTMLElement) => boolean;
	/**
	 * Select which elements to ignore.
	 */
	ignoreElementFromB?: (tag: HTMLElement) => boolean;
};

const defaultOpts: DiffOptions = {
	ignoreSpaces: true,
	ignoreComments: true,
	ignoreClasses: ["unstyled"],
	before: 5,
	after: 5,
};

export async function htmldiff(a: HTMLElement, b: HTMLElement, opts: DiffOptions): Promise<string> {
	opts = { ...defaultOpts, ...opts };

	const aclean = cleanTree(a, opts, opts.ignoreElementFromA);
	const bclean = cleanTree(b, opts, opts.ignoreElementFromB);

	const result = ["Differences: (left: a, right: b)"];

	const diffResult = await prettyDiff(
		aclean.innerHTML,
		bclean.innerHTML,
		opts.before || 10,
		opts.after || 10,
	);

	if (!diffResult) {
		return "";
	}
	result.push(diffResult);
	return result.join("\n");
}

const Node = {
	/** node is an element. */
	ELEMENT_NODE: 1,
	ATTRIBUTE_NODE: 2,
	/** node is a Text node. */
	TEXT_NODE: 3,
	COMMENT_NODE: 8,
};

function cleanTree(el: HTMLElement, opts: DiffOptions, ignoreFunc?: (tag: HTMLElement) => boolean) {
	const traverse = (node: HTMLElement, root?: HTMLElement) => {
		if (node.nodeType === Node.TEXT_NODE) {
			if (opts.ignoreSpaces && node.textContent?.trim && node.textContent.trim() === "") {
				root!.removeChild(node);
				return true;
			}
		} else if (node.nodeType === Node.COMMENT_NODE) {
			if (opts.ignoreComments) {
				root!.removeChild(node);
				return true;
			}
		} else if (node.nodeType === Node.ELEMENT_NODE) {
			if (ignoreFunc) {
				if (ignoreFunc(node as HTMLElement)) {
					root!.removeChild(node);
					return true;
				}
			}

			const attrs: { [key: string]: string } = {};
			for (let i = 0; i < node.attributes.length; i++) {
				const attr = node.attributes[i];
				attrs[attr.name] = attr.value;
			}
			// Sort attributes by attribute name
			Object.keys(attrs).forEach((name) => {
				node.removeAttribute(name);
			});

			Object.keys(attrs)
				.sort()
				.filter((name) => {
					if (opts.compareAttrs) {
						return opts.compareAttrs(node, name);
					}
					return true;
				})
				.forEach((name) => {
					if (name === "class") {
						attrs[name] = attrs[name].split(" ").sort().join(" ");
					}
					node.setAttribute(name, attrs[name]);
				});

			if (opts.alterAttrValue) {
				for (let i = 0; i < node.attributes.length; i++) {
					const attr = node.attributes[i];
					attr.value = opts.alterAttrValue(attr.name, attr.value);
				}
			}

			// Sort styles
			if (node.style.length > 0) {
				const sorted = node.style.cssText
					.split(";")
					.filter((v) => !!v)
					.map((v) => v.trim())
					.sort()
					.join(";");
				node.setAttribute("style", sorted);
			}

			// // sort classes
			// const sorted = Array.from(classes).sort();
			// classes.remove(...sorted);
			// classes.add(...sorted);

			if (opts.ignoreClasses) {
				const classes = node.classList;
				opts.ignoreClasses.forEach((c) => {
					classes.remove(c);
				});
			}
		}

		for (let i = 0; i < node.childNodes.length; i++) {
			if (traverse(node.childNodes[i] as HTMLElement, node)) {
				i--;
			}
		}
	};

	traverse(el);

	return el;
}

const green = (input: string) => "\x1b[32m" + input + "\x1b[0m";
const red = (input: string) => "\x1b[31m" + input + "\x1b[0m";

async function prettyDiff(a: string, b: string, before: number, after: number) {
	const lines = [
		`Pretty diff: ${red("only in svelte")}, ${green("only in react")}\n`,
		"Remember that this diff is a tool, not actualy what's tested.\n",
		`${before} lines before and ${after} lines after a change are shown.\n`,
	];

	const opts = { parser: "html", singleAttributePerLine: true, plugins: [htmlPrettier] };

	const afmt = await prettier.format(a, opts);
	const bfmt = await prettier.format(b, opts);

	let addedOrRemoved = 0;
	Diff.diffWords(afmt, bfmt).forEach((part) => {
		if (part.added) {
			addedOrRemoved++;
			lines.push(`${green(part.value)}`);
		} else if (part.removed) {
			addedOrRemoved++;
			lines.push(`${red(part.value)}`);
		} else {
			lines.push(part.value);
		}
	});

	if (addedOrRemoved == 0) {
		return "";
	}

	return lines.join("");
}

async function doExpect<T extends SvelteComponent>(
	opts: DiffOptions,
	input: RenderResult<T>,
	comp: ReactComponent,
	props: object | null,
	...children: ReactNode[]
): Promise<{
	pass: boolean;
	message: () => string;
}> {
	let received = input as unknown;
	if (!(received instanceof HTMLElement)) {
		if (typeof received === "object") {
			const r = received as {
				container: HTMLElement;
			};
			if (Object.keys(r).includes("container")) {
				received = r.container!;
			}
		}
	}

	if (!(received instanceof HTMLElement)) {
		throw new Error("Expected received to be an HTMLElement");
	}

	const container = document.createElement("div");
	{
		// Hack to remove ugly errors from react
		const error = console.error;
		console.error = () => {};
		container.innerHTML = ReactDOMServer.renderToString(
			React.createElement(comp as FunctionComponent, props, ...children),
		);
		console.error = error;
	}
	const diff = await htmldiff(received as HTMLElement, container, opts);

	return {
		pass: diff === "",
		message: () => diff,
	};
}

export type Options = {
	opts?: DiffOptions;
	props?: object;
	children?: ReactNode[];
};

export async function toMimicReact<T extends SvelteComponent>(
	received: RenderResult<T>,
	comp: ReactComponent,
	opts?: Options,
) {
	try {
		if (!opts) {
			return await doExpect(defaultOpts, received, comp, null);
		}
		return await doExpect(
			opts.opts || defaultOpts,
			received,
			comp,
			opts.props || null,
			...(opts.children || []),
		);
	} catch (e) {
		console.log(e);
		return {
			pass: false,
			message: () => `Unexpected error: ${e}`,
		};
	}
}
