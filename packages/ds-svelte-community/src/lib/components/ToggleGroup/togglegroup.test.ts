import { bunmatch } from "$testlib/bunmatch";
import { ToggleGroup as ReactToggleGroup } from "@navikt/ds-react";
import { cleanup, render } from "@testing-library/svelte";
import React from "react";
import type { ComponentProps } from "svelte";
import { afterEach, describe, expect, it } from "vitest";
import { omit } from "../helpers";
import ToggleGroup from "./ToggleGroup.test.svelte";

describe("ToggleGroup", () => {
	it("renders with HTML similar to ds-react (tabindex exception)", async () => {
		const props: ComponentProps<ToggleGroup> = {
			value: "val2",
			items: ["val1", "val2", "val3"],
		};
		expect(
			await bunmatch(render(ToggleGroup, props), ReactToggleGroup, {
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

					alterAttrValue(name, value) {
						// TODO: Figure out why after switching to happy-dom `outline: none` is replaced with full syntax.
						if (
							name == "style" &&
							value == "outline-style: none; outline-width: initial; outline-color: none"
						) {
							value = "outline: none";
						}
						return value;
					},
					// compareAttrs(node, attr) {
					// 	// Remove attrs known to be unique
					// 	if (["id", "aria-describedby", "for"].includes(attr)) {
					// 		return false;
					// 	}
					// 	return true;
					// },
				},
			}),
		).toBeTruthy();
	});

	afterEach(cleanup);
});
