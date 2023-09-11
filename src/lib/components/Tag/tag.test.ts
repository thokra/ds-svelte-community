import { Tag as ReactTag } from "@navikt/ds-react";
import { cleanup, render } from "@testing-library/svelte";
import { afterEach, describe, expect, it } from "vitest";
import Tag from "./Tag.test.svelte";
import { variants, type Props } from "./type";

describe.concurrent("Tag", () => {
	variants.forEach((variant) => {
		it("renders with HTML similar to ds-react", () => {
			const props: Props = {
				variant,
			};
			expect(render(Tag, props)).toMimicReact(ReactTag, {
				props,
				children: ["Tag content"],
				opts: {
					// compareAttrs(node, attr) {
					// 	// Remove attrs known to be unique
					// 	if (["id", "aria-describedby", "for"].includes(attr)) {
					// 		return false;
					// 	}
					// 	return true;
					// },
				},
			});
		});
	});

	afterEach(cleanup);
});
