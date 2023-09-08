import { CopyButton as ReactCopyButton } from "@navikt/ds-react";
import { cleanup, render } from "@testing-library/svelte";
import { afterEach, describe, expect, it } from "vitest";
import CopyButton from "./CopyButton.test.svelte";
import type { Props } from "./type";

describe.concurrent("CopyButton", () => {
	it("renders with HTML similar to ds-react", () => {
		const props: Props = {
			copyText: "Copy text",
		};
		expect(render(CopyButton, props)).toMimicReact(ReactCopyButton, {
			props,
			opts: {
				ignoreElementFromB(tag) {
					// Ignore title element from SVG
					if (tag.tagName.toLowerCase() == "title") {
						return true;
					}
					return false;
				},
				compareAttrs(node, attr) {
					// SVGs are a bit different
					if (node.tagName.toLowerCase() == "path" && attr == "d") {
						return false;
					}

					if (node.tagName.toLowerCase() == "svg") {
						// Since we're using aria-label and not title & aria-labelledby, we need to ignore both attrs
						if (["aria-label", "aria-labelledby"].includes(attr)) {
							return false;
						}
					}

					return true;
				},
			},
		});
	});

	it("renders with HTML similar to ds-react with text", () => {
		const props: Props = {
			copyText: "Copy text",
			text: "Custom text",
		};
		expect(render(CopyButton, props)).toMimicReact(ReactCopyButton, {
			props,
			opts: {
				ignoreElementFromB(tag) {
					// Ignore title element from SVG
					if (tag.tagName.toLowerCase() == "title") {
						return true;
					}
					return false;
				},
				compareAttrs(node, attr) {
					// SVGs are a bit different
					if (node.tagName.toLowerCase() == "path" && attr == "d") {
						return false;
					}

					if (node.tagName.toLowerCase() == "svg") {
						// Since we're using aria-label and not title & aria-labelledby, we need to ignore both attrs
						if (["aria-label", "aria-labelledby"].includes(attr)) {
							return false;
						}
					}

					return true;
				},
			},
		});
	});

	afterEach(cleanup);
});
