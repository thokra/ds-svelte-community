import prettier from "@prettier/sync";
import * as Diff from "diff";
import type { FunctionComponent, ReactNode } from "react";
import React from "react";
import * as ReactDOMServer from "react-dom/server";
import { expect } from "vitest";

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

export function htmldiff(a: HTMLElement, b: HTMLElement, opts: DiffOptions): string {
	opts = { ...defaultOpts, ...opts };

	const aclean = cleanTree(a, opts, opts.ignoreElementFromA);
	const bclean = cleanTree(b, opts, opts.ignoreElementFromB);

	const result = ["Differences: (left: a, right: b)"];

	const diffResult = prettyDiff(
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

			// // sort classes
			// const sorted = Array.from(classes).sort();
			// classes.remove(...sorted);
			// classes.add(...sorted);

			if (opts.ignoreClasses) {
				const classes = node.classList;
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

function prettyDiff(a: string, b: string, before: number, after: number) {
	const lines = [
		`Pretty diff: ${red("only in a")}, ${green("only in b")}\n`,
		"Remember that this diff is a tool, not actualy what's tested.\n",
		`${before} lines before and ${after} lines after a change are shown.\n`,
	];

	const opts = { parser: "html", singleAttributePerLine: true };

	// For some reason, the async version of prettier exits this function before it's done.
	// So we use the sync version, but it's soooo slow. (But I'd rather have correct output than fast output)
	const afmt = prettier.format(a, opts);
	const bfmt = prettier.format(b, opts);

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

function doExpect(
	opts: DiffOptions,
	received: unknown,
	comp: ReactComponent,
	props: object | null,
	...children: ReactNode[]
): {
	pass: boolean;
	message: () => string;
} {
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
	{
		// Hack to remove ugly errors from react
		const error = console.error;
		console.error = () => {};
		container.innerHTML = ReactDOMServer.renderToString(
			React.createElement(comp as FunctionComponent, props, ...children),
		);
		console.error = error;
	}
	const diff = htmldiff(received as HTMLElement, container, opts);

	return {
		pass: diff === "",
		message: () => diff,
	};
}

expect.extend({
	toMimicReact(
		received: unknown,
		comp: ReactComponent,
		opts?: {
			opts?: DiffOptions;
			props?: object;
			children?: ReactNode[];
		},
	) {
		try {
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
		} catch (e) {
			return {
				pass: false,
				message: () => `Unexpected error: ${e}`,
			};
		}
	},
});
