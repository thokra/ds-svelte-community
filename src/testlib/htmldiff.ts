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
	compareAttrs?: (tag: string, name: string) => boolean;

	/**
	 * Select which elements to ignore.
	 */
	ignoreElementFromB?: (tag: string) => boolean;
};

const defaultOpts: DiffOptions = {
	ignoreSpaces: true,
	ignoreComments: true,
	ignoreClasses: ["unstyled"],
};

function compareClasses(
	diffs: Map<string, string>,
	a: HTMLElement,
	b: HTMLElement,
	path: string,
	opts: DiffOptions,
) {
	const aclasses = a.classList;
	if (opts.ignoreClasses) {
		aclasses.remove(...opts.ignoreClasses);
	}
	const bclasses = b.classList;
	aclasses.forEach((c) => {
		if (!bclasses.contains(c)) {
			diffs.set(path, "Excess class in a: " + c);
		}
	});
	bclasses.forEach((c) => {
		if (!aclasses.contains(c)) {
			diffs.set(path, "Missing class in a: " + c);
		}
	});
}

function attrList(attrs: NamedNodeMap, tag: string, opts: DiffOptions) {
	if (!opts.compareAttrs) {
		return attrs;
	}

	const toRemove: string[] = [];
	for (let i = 0; i < attrs.length; i++) {
		const aattr = attrs[i];
		if (!opts.compareAttrs(tag, aattr.name)) {
			toRemove.push(aattr.name);
		}
	}
	toRemove.forEach((name) => {
		attrs.removeNamedItem(name);
	});
	return attrs;
}

function compareAttributes(
	diffs: Map<string, string>,
	a: HTMLElement,
	b: HTMLElement,
	path: string,
	opts: DiffOptions,
) {
	const aattrs = attrList(a.attributes, a.tagName, opts);
	const battrs = attrList(b.attributes, b.tagName, opts);

	if (aattrs.length !== battrs.length) {
		diffs.set(path, "Attribute length mismatch: " + aattrs.length + " !== " + battrs.length);
	} else {
		for (let i = 0; i < aattrs.length; i++) {
			const aattr = aattrs[i];
			const bval = b.getAttribute(aattr.name);
			if (bval === null) {
				diffs.set(path, "Missing attribute in b: " + aattr.name);
			} else {
				if (aattr.name === "class") {
					compareClasses(diffs, a, b, path, opts);
				} else {
					let val = aattr.value;
					if (opts.alterAttrValue) {
						val = opts.alterAttrValue(aattr.name, val);
					}
					if (val !== bval) {
						diffs.set(
							path,
							"Attribute value mismatch for '" +
								aattr.name +
								"':\na: '" +
								val +
								"\nb: '" +
								bval +
								"'",
						);
					}
				}
			}
		}

		for (let i = 0; i < b.attributes.length; i++) {
			const battr = b.attributes[i];
			if (!a.hasAttribute(battr.name)) {
				diffs.set(path, "Missing attribute in a: " + battr.name);
			}
		}
	}

	return diffs;
}

async function htmldiff(a: HTMLElement, b: HTMLElement, opts: DiffOptions): Promise<string> {
	const diffs = new Map<string, string>();
	opts = { ...defaultOpts, ...opts };

	const traverse = (a: HTMLElement, b: HTMLElement | undefined, path: string) => {
		if (!b) {
			diffs.set(path, "Missing node in b, expected " + a.tagName);
		} else {
			if (a.nodeType === Node.TEXT_NODE) {
				if (a.textContent !== b.textContent) {
					diffs.set(path, b.textContent || "");
				}
			} else {
				if (a.tagName !== b.tagName) {
					diffs.set(path, "Tag mismatch: " + a.tagName + " !== " + b.tagName);
				} else {
					compareAttributes(diffs, a, b, path, opts);

					let bi = 0;
					for (let i = 0; i < a.childNodes.length; i++) {
						if (opts.ignoreComments) {
							if (a.childNodes[i].nodeType === Node.COMMENT_NODE) {
								a.removeChild(a.childNodes[i]);
								i--;
								continue;
							}
						}

						if (opts.ignoreSpaces) {
							if (a.childNodes[i].nodeType === Node.TEXT_NODE) {
								if (a.childNodes[i].textContent?.trim() === "") {
									a.removeChild(a.childNodes[i]);
									i--;
									continue;
								}
							}
						}

						if (opts.ignoreElementFromB) {
							for (; bi < b.childNodes.length; ) {
								const bn = b.childNodes[bi] as HTMLElement;
								if (!opts.ignoreElementFromB(bn.tagName)) {
									break;
								}

								b.removeChild(b.children[bi]);
								continue;
							}
						}

						traverse(
							a.childNodes[i] as HTMLElement,
							b.childNodes[bi] as HTMLElement,
							`${path}.${a.tagName}[${bi}]`,
						);
						bi++;
					}
				}
			}
		}
	};

	traverse(a, b, "");

	if (diffs.size === 0) return "";

	const result = ["Differences: (left: a, right: b)"];
	for (const [path, diff] of diffs) {
		result.push(path + ": " + diff);
	}

	result.push(await prettyDiff(a.innerHTML, b.innerHTML));
	return result.join("\n");
}

const green = (input: string) => "\x1b[32m" + input + "\x1b[0m";
const red = (input: string) => "\x1b[31m" + input + "\x1b[0m";

async function prettyDiff(a: string, b: string) {
	const lines = [
		`Pretty diff: ${red("only in a")}, ${green("only in b")}\n`,
		"Remember that this diff is a tool, not actualy what's tested.\n",
	];

	const afmt = await prettier.format(a, { parser: "html" });
	const bfmt = await prettier.format(b, { parser: "html" });

	Diff.diffLines(afmt, bfmt).forEach((part) => {
		if (part.added) {
			lines.push(`${green(part.value)}`);
		} else if (part.removed) {
			lines.push(`${red(part.value)}`);
		} else {
			lines.push(part.value);
		}
	});
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
