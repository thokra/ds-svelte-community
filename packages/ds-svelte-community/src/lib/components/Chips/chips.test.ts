import { bunmatch } from "$testlib/bunmatch";
import { Chips as ReactChips } from "@navikt/ds-react";
import { cleanup, render } from "@testing-library/svelte";
import { afterEach, describe, expect, it } from "bun:test";
import React from "react";
import Chips from "./Chips.test.svelte";

describe("Chips", () => {
	it("renders Chips Removable similar to ds-react", async () => {
		const props = {
			values: ["val1", "val2", "val3"],
		};
		expect(
			await bunmatch(render(Chips, props), ReactChips, {
				children: props.values.map((v) => {
					return React.createElement(ReactChips.Removable, null, v);
				}),
				opts: {
					compareAttrs(node, attr) {
						const tag = node.tagName.toLowerCase();
						if (tag == "path" && attr == "d") {
							return false;
						}
						return true;
					},
				},
			}),
		).toBeTrue();
	});

	it("renders Chips Toggle similar to ds-react", async () => {
		const props = {
			values: ["val1", "val2", "val3"],
			toggle: true,
			selected: "val2",
		};
		expect(
			await bunmatch(render(Chips, props), ReactChips, {
				children: props.values.map((v) => {
					return React.createElement(
						ReactChips.Toggle,
						{ selected: v == props.selected } as never,
						v,
					);
				}),
				opts: {
					compareAttrs(node, attr) {
						const tag = node.tagName.toLowerCase();
						if (tag == "path" && attr == "d") {
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
