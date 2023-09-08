import { Checkbox as ReactCheckbox, CheckboxGroup as ReactCheckboxGroup } from "@navikt/ds-react";
import { cleanup, render } from "@testing-library/svelte";
import React from "react";
import { afterEach, describe, expect, it } from "vitest";
import Checkbox, { type ItemProps } from "./CheckboxGroup.test.svelte";
import type { Props } from "./type";

describe.concurrent("CheckboxGroup", () => {
	it("renders CheckboxGroup similar to ds-react", () => {
		const props = {
			wrapper: {
				legend: "Checkbox legend",
				value: ["val2", "val3"],
			} as Props,
			items: [
				{ value: "val1", content: "Checkbox content 1" },
				{ value: "val2", content: "Checkbox content 2" },
				{ value: "val3", content: "Checkbox content 3" },
				{ value: "val4", content: "Checkbox content 4" },
			] as ItemProps[],
		};
		expect(render(Checkbox, props)).toMimicReact(ReactCheckboxGroup, {
			props: {
				legend: props.wrapper.legend!,
				defaultValue: props.wrapper.value,
			},
			children: props.items.map((v, i) => {
				return React.createElement(ReactCheckbox, {
					value: v.value,
					children: v.content,
					key: i,
				});
			}),
			opts: {
				ignoreElementFromA(tag) {
					// Because of limitations on slots, we have to remove one extra div created by svelte
					// when there's no description
					if (
						tag.tagName.toLowerCase() == "div" &&
						tag.classList.contains("navds-fieldset__description")
					) {
						return true;
					}
					return false;
				},
				compareAttrs(node, attr) {
					const tag = node.tagName.toLowerCase();
					if (tag == "path" && attr == "d") {
						return false;
					}
					// For an unknown reason, `checked` is not set on the input element
					if (tag == "input" && attr == "checked") {
						return false;
					}
					// We have different IDs, so we ignore id and for attributes
					if (attr == "id" || attr == "for" || attr == "aria-describedby") {
						return false;
					}
					return true;
				},
			},
		});
	});

	it("renders CheckboxGroup similar to ds-react with descriptions", () => {
		const props = {
			wrapper: {
				legend: "Checkbox legend",
				description: "Checkbox description",
				value: ["val4"],
			} as Props,
			items: [
				{ value: "val1", description: "Desc", content: "Checkbox content 1" },
				{ value: "val4", content: "Checkbox content 4" },
			] as ItemProps[],
		};
		expect(render(Checkbox, props)).toMimicReact(ReactCheckboxGroup, {
			props: {
				legend: props.wrapper.legend!,
				description: props.wrapper.description!,
				defaultValue: props.wrapper.value,
			},
			children: props.items.map((v, i) => {
				return React.createElement(ReactCheckbox, {
					value: v.value,
					description: v.description,
					children: v.content,
					key: i,
				});
			}),
			opts: {
				compareAttrs(node, attr) {
					const tag = node.tagName.toLowerCase();
					if (tag == "path" && attr == "d") {
						return false;
					}
					// For an unknown reason, `checked` is not set on the input element
					if (tag == "input" && attr == "checked") {
						return false;
					}
					// We have different IDs, so we ignore id and for attributes
					if (attr == "id" || attr == "for" || attr == "aria-describedby") {
						return false;
					}
					return true;
				},
			},
		});
	});

	afterEach(cleanup);
});
