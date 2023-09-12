import { ToggleGroup as ReactToggleGroup } from "@navikt/ds-react";
import { cleanup, render } from "@testing-library/svelte";
import React from "react";
import type { ComponentProps } from "svelte";
import { afterEach, describe, expect, it } from "vitest";
import { omit } from "../helpers";
import ToggleGroup from "./ToggleGroup.test.svelte";

describe.concurrent("ToggleGroup", () => {
	it("renders with HTML similar to ds-react (tabindex exception)", () => {
		const props: ComponentProps<ToggleGroup> = {
			value: "val2",
			items: ["val1", "val2", "val3"],
		};
		expect(render(ToggleGroup, props)).toMimicReact(ReactToggleGroup, {
			props: omit(props, "items"),
			children: props.items.map((i, key) => {
				return React.createElement(ReactToggleGroup.Item, { key, value: i } as never, i);
			}),
			opts: {
				compareAttrs(node, attr) {
					// Because ds-react has wrong tabindex when rendered server side, we ignore it.
					// Comment to test and manually verify.
					if (attr === "tabindex") {
						return false;
					}

					// Remove radix attr
					if (["data-radix-collection", "data-radix-collection-item"].includes(attr)) {
						return false;
					}

					return true;
				},
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

	afterEach(cleanup);
});
