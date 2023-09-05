import * as Diff from "diff";
import * as prettier from "prettier";
import type { FunctionComponent, ReactNode } from "react";
import React from "react";
import * as ReactDOMServer from "react-dom/server";
import { expect } from "vitest";

export type ReactComponent = unknown;

export type DiffOptions = {
	ignoreSpaces?: boolean;
	ignoreComments?: boolean;
	ignoreClasses?: string[];
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
};

export async function htmldiff(a: HTMLElement, b: HTMLElement, opts: DiffOptions): Promise<string> {
	opts = { ...defaultOpts, ...opts };

	const aclean = cleanTree(a, opts, opts.ignoreElementFromA);
	const bclean = cleanTree(b, opts, opts.ignoreElementFromB);

	const result = ["Differences: (left: a, right: b)"];

	const diffResult = await prettyDiff(aclean.innerHTML, bclean.innerHTML);
	if (!diffResult) {
		return "";
	}
	result.push(diffResult);
	return result.join("\n");
}

function cleanTree(el: HTMLElement, opts: DiffOptions, ignoreFunc?: (tag: HTMLElement) => boolean) {
	const traverse = (node: HTMLElement, root?: HTMLElement) => {
		if (node.nodeType === Node.TEXT_NODE) {
			if (opts.ignoreSpaces && node.textContent?.trim() === "") {
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
					node.setAttribute(name, attrs[name]);
				});

			if (opts.alterAttrValue) {
				for (let i = 0; i < node.attributes.length; i++) {
					const attr = node.attributes[i];
					attr.value = opts.alterAttrValue(attr.name, attr.value);
				}
			}

			const classes = node.classList;
			// sort classes
			const sorted = Array.from(classes).sort();
			classes.remove(...sorted);
			classes.add(...sorted);

			if (opts.ignoreClasses) {
				classes.remove(...opts.ignoreClasses);
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

async function prettyDiff(a: string, b: string) {
	const lines = [
		`Pretty diff: ${red("only in a")}, ${green("only in b")}\n`,
		"Remember that this diff is a tool, not actualy what's tested.\n",
	];

	const afmt = await prettier.format(a, { parser: "html", singleAttributePerLine: true });
	const bfmt = await prettier.format(b, { parser: "html", singleAttributePerLine: true });

	let addedOrRemoved = 0;
	Diff.diffLines(afmt, bfmt).forEach((part) => {
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

async function doExpect(
	opts: DiffOptions,
	received: unknown,
	comp: ReactComponent,
	props: object | null,
	...children: ReactNode[]
) {
	if (!(received instanceof HTMLElement)) {
		if (typeof received === "object") {
			const r = received as {
				container: HTMLElement;
			};
			if (Object.keys(r).includes("container")) {
				received = r.container.firstElementChild!;
			}
		}
	}

	if (!(received instanceof HTMLElement)) {
		throw new Error("Expected received to be an HTMLElement");
	}

	const container = document.createElement("div");
	container.innerHTML = ReactDOMServer.renderToString(
		React.createElement(comp as FunctionComponent, props, ...children),
	);

	const diff = await htmldiff(received as HTMLElement, container, opts);

	return {
		pass: diff === "",
		message: () => diff,
	};
}

expect.extend({
	async toMimicReact(
		received: unknown,
		comp: ReactComponent,
		opts?: {
			opts?: DiffOptions;
			props?: object;
			children?: ReactNode[];
		},
	) {
		if (!opts) {
			return doExpect(defaultOpts, received, comp, null);
		}
		return doExpect(
			opts.opts || defaultOpts,
			received,
			comp,
			opts.props || null,
			...(opts.children || []),
		);
	},
});
