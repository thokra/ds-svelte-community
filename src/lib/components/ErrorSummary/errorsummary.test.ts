import { ErrorSummary as ReactErrorSummary } from "@navikt/ds-react";
import { cleanup, render } from "@testing-library/svelte";
import React from "react";
import { afterEach, describe, expect, it } from "vitest";
import ErrorSummary from "./ErrorSummary.test.svelte";

describe.concurrent("ErrorSummary", () => {
	it("renders with HTML similar to ds-react", () => {
		expect(render(ErrorSummary, {})).toMimicReact(ReactErrorSummary, {
			props: {
				heading: "Some errors occurred",
			},
			children: [
				React.createElement(ReactErrorSummary.Item, {
					href: "#1",
					children: ["Checkbox needs to be checked"],
				} as never),
				React.createElement(ReactErrorSummary.Item, {
					href: "#2",
					children: ["Textfield requires valid email"],
				} as never),
			],
			opts: {
				compareAttrs(node, attr) {
					const tagName = node.tagName.toLowerCase();
					// Since IDs differ, we igore id and for attributes
					if (tagName == "h2" && attr == "id") {
						return false;
					}

					if (tagName == "section" && attr == "aria-labelledby") {
						return false;
					}

					return true;
				},
			},
		});
	});

	afterEach(cleanup);
});
