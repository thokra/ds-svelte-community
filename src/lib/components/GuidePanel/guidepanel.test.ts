import { GuidePanel as ReactGuidePanel } from "@navikt/ds-react";
import { cleanup, render } from "@testing-library/svelte";
import { afterEach, describe, expect, it } from "vitest";
import GuidePanel from "./GuidePanel.test.svelte";
import type { Props } from "./type";

describe.concurrent("GuidePanel", () => {
	it("renders with HTML similar to ds-react", () => {
		const props: Props = {};
		expect(render(GuidePanel, props)).toMimicReact(ReactGuidePanel, {
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
		});
	});

	afterEach(cleanup);
});
