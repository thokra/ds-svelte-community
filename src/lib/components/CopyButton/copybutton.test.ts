import { CopyButton as ReactCopyButton } from "@navikt/ds-react";
import { cleanup, render } from "@testing-library/svelte";
import { afterEach, describe, expect, it } from "vitest";
import CopyButton from "./CopyButton.test.svelte";
import type { Props } from "./type";

describe.concurrent("CopyButton", () => {
	it("renders with HTML similar to ds-react", () => {
		const props: Props = {
			text: "Copy",
			copyText: "Copy text",
		};
		expect(render(CopyButton, props)).toMimicReact(ReactCopyButton, {
			props,
			opts: {
				compareAttrs(node, attr) {
					// Title ids are unique
					if (node.tagName.toLowerCase() == "title" && attr == "id") {
						return false;
					}

					if (node.tagName.toLowerCase() == "svg") {
						if (["aria-labelledby"].includes(attr)) {
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
				compareAttrs(node, attr) {
					// Title ids are unique
					if (node.tagName.toLowerCase() == "title" && attr == "id") {
						return false;
					}

					if (node.tagName.toLowerCase() == "svg") {
						if (["aria-labelledby"].includes(attr)) {
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
