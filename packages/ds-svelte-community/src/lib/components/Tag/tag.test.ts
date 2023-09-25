import { bunmatch } from "$testlib/bunmatch";
import { Tag as ReactTag } from "@navikt/ds-react";
import { cleanup, render } from "@testing-library/svelte";
import { afterEach, describe, expect, it } from "bun:test";
import Tag from "./Tag.test.svelte";
import { variants, type Props } from "./type";

describe("Tag", () => {
	variants.forEach((variant) => {
		it("renders with HTML similar to ds-react variant " + variant, async () => {
			const props: Props = {
				variant,
			};
			expect(
				await bunmatch(render(Tag, props), ReactTag, {
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
				}),
			).toBeTrue();
		});
	});

	afterEach(cleanup);
});
