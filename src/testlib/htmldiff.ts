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
};

const defaultOpts: DiffOptions = {
	ignoreSpaces: true,
	ignoreComments: true,
	ignoreClasses: ["unstyled"],
	alterAttrValue: (name, value) => value,
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

function compareAttributes(
	diffs: Map<string, string>,
	a: HTMLElement,
	b: HTMLElement,
	path: string,
	opts: DiffOptions,
) {
	if (a.attributes.length !== b.attributes.length) {
		diffs.set(
			path,
			"Attribute length mismatch: " + a.attributes.length + " !== " + b.attributes.length,
		);
	} else {
		for (let i = 0; i < a.attributes.length; i++) {
			const aattr = a.attributes[i];
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

function htmldiff(a: HTMLElement, b: HTMLElement, opts: DiffOptions): string {
	const diffs = new Map<string, string>();
	opts = { ...defaultOpts, ...opts };

	const traverse = (a: HTMLElement, b: HTMLElement | undefined, path: string) => {
		if (a.nodeType === Node.COMMENT_NODE) return;

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
								continue;
							}
						}

						if (opts.ignoreSpaces) {
							if (a.childNodes[i].nodeType === Node.TEXT_NODE) {
								if (a.childNodes[i].textContent?.trim() === "") {
									continue;
								}
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

	result.push("a: " + a.outerHTML);
	result.push("b: " + b?.outerHTML);

	return result.join("\n");
}

function doExpect(
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
