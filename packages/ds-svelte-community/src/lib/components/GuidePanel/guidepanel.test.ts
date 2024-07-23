import { bunmatch } from "$testlib/bunmatch";
import { GuidePanel as ReactGuidePanel } from "@navikt/ds-react";
import { cleanup, render } from "@testing-library/svelte";
import { afterEach, describe, expect, it } from "vitest";
import GuidePanel from "./GuidePanel.test.svelte";
import type { Props } from "./type";

describe("GuidePanel", () => {
	it("renders with HTML similar to ds-react", async () => {
		const props: Props = {};
		expect(
			await bunmatch(render(GuidePanel, props), ReactGuidePanel, {
				props,
				children: ["Guide Panel Content"],
				opts: {
					ignoreElementFromA(tag) {
						return tag.tagName.toLowerCase() == "title";
					},
					compareAttrs(node, attr) {
						const tagName = node.tagName.toLowerCase();
						if (tagName == "svg" && ["aria-labelledby", "aria-label"].includes(attr)) {
							return false;
						}
						// Known unique attributes
						if (["id"].includes(attr)) {
							return false;
						}
						return true;
					},
				},
			}),
		).toBeTruthy();
	});

	afterEach(cleanup);
});
