import { Chips as ReactChips } from "@navikt/ds-react";
import { cleanup, render } from "@testing-library/svelte";
import React from "react";
import { afterEach, describe, expect, it } from "vitest";
import Chips from "./Chips.test.svelte";

describe.concurrent("Alert", () => {
	it("renders Chips Removable similar to ds-react", () => {
		const props = {
			values: ["val1", "val2", "val3"],
		};
		expect(render(Chips, props)).toMimicReact(ReactChips, {
			children: props.values.map((v) => {
				return React.createElement(ReactChips.Removable, null, v);
			}),
			opts: {
				compareAttrs(tag, name) {
					if (tag == "path" && name == "d") {
						return false;
					}
					return true;
				},
			},
		});
	});

	it("renders Chips Toggle similar to ds-react", () => {
		const props = {
			values: ["val1", "val2", "val3"],
			toggle: true,
			selected: "val2",
		};
		expect(render(Chips, props)).toMimicReact(ReactChips, {
			children: props.values.map((v) => {
				return React.createElement(
					ReactChips.Toggle,
					{ selected: v == props.selected } as never,
					v,
				);
			}),
			opts: {
				compareAttrs(tag, name) {
					if (tag == "path" && name == "d") {
						return false;
					}
					return true;
				},
			},
		});
	});
	afterEach(cleanup);
});
