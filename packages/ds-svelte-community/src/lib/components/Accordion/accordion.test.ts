import { Accordion as ReactAccordion } from "@navikt/ds-react";
import { cleanup, render } from "@testing-library/svelte";
import { afterEach, describe, expect, it } from "bun:test";
import React from "react";
import Accordion, { type TestProps } from "./Accordion.test.svelte";

describe("Accordion", () => {
	it("renders Accordion Removable similar to ds-react", async () => {
		const props = {
			items: [
				{ heading: "Heading 1", content: "Content 1" },
				{ heading: "Heading 2", content: "Content 2", open: true },
				{ heading: "Heading 3", content: "Content 3" },
			],
		} as TestProps;
		expect(render(Accordion, props)).toMimicReact(ReactAccordion, {
			children: props.items.map((v, i) => {
				return React.createElement(ReactAccordion.Item, {
					defaultOpen: v.open,
					children: [
						React.createElement(ReactAccordion.Header, { key: `h-${i}`, children: v.heading }),
						React.createElement(ReactAccordion.Content, { key: `c-${i}`, children: v.content }),
					],
					key: i,
				});
			}),
			opts: {
				alterAttrValue(name, value) {
					if (name == "class") {
						// Remove class that's not used in ds-svelte
						return value.replace(" navds-accordion__item--no-animation", "");
					}

					return value;
				},
				compareAttrs(node, attr) {
					const tag = node.tagName.toLowerCase();
					if (tag == "svg" && attr == "aria-labelledby") {
						return false;
					}
					if (tag == "title" && attr == "id") {
						return false;
					}
					return true;
				},
			},
		});

		afterEach(cleanup);
	});
});
