import { bunmatch } from "$testlib/bunmatch";
import { LinkPanel as ReactLinkPanel } from "@navikt/ds-react";
import { cleanup, render } from "@testing-library/svelte";
import { afterEach, describe, expect, it } from "bun:test";
import React from "react";
import LinkPanel from "./LinkPanel.test.svelte";

describe("LinkPanel", () => {
	it("renders with HTML similar to ds-react", async () => {
		expect(
			await bunmatch(render(LinkPanel), ReactLinkPanel, {
				props: {
					href: "#link",
				},
				children: [
					React.createElement(ReactLinkPanel.Title, {
						children: ["Some actionable text"],
					} as never),
					React.createElement(ReactLinkPanel.Description, {
						children: ["A short description about the actions possible"],
					} as never),
				],

				opts: {
					compareAttrs(node, attr) {
						// Remove attrs that differ in path
						if (node.tagName.toLowerCase() == "path" && attr == "d") {
							return false;
						}
						return true;
					},
				},
			}),
		).toBeTrue();
	});

	afterEach(cleanup);
});
