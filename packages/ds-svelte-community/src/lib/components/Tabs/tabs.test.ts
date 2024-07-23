import { bunmatch } from "$testlib/bunmatch";
import { Tabs as ReactTabs } from "@navikt/ds-react";
import { cleanup, render } from "@testing-library/svelte";
import React from "react";
import type { ComponentProps } from "svelte";
import { afterEach, describe, expect, it } from "vitest";
import Tabs from "./Tabs.test.svelte";

describe("Tabs", () => {
	it("renders with HTML similar to ds-react", async () => {
		const props: ComponentProps<Tabs> = {
			value: "tab2",
			data: [
				{ value: "val1", tab: "tab1", content: "content1" },
				{ value: "val2", tab: "tab2", content: "content2" },
				{ value: "val3", tab: "tab3", content: "content3" },
			],
		};
		expect(
			await bunmatch(render(Tabs, props), ReactTabs, {
				props: {
					defaultValue: props.value,
				},
				children: [
					React.createElement(ReactTabs.List, {} as never, [
						props.data.map((tab) => {
							return React.createElement(ReactTabs.Tab, {
								value: tab.value,
								label: tab.tab,
							} as never);
						}),
					]),

					...props.data.map((tab) => {
						return React.createElement(ReactTabs.Panel, { value: tab.value } as never, tab.content);
					}),
				],
				opts: {
					alterAttrValue(name, value) {
						if (name == "hidden" && value == "true") {
							return "";
						}
						if (name == "class") {
							value = value.replaceAll(/(^|\s)s(velte)?-\w+/g, "");
						}

						// TODO: Figure out why after switching to happy-dom `outline: none` is replaced with full syntax.
						if (
							name == "style" &&
							value == "outline-style: none; outline-width: initial; outline-color: none"
						) {
							value = "outline: none";
						}
						return value;
					},
					compareAttrs(node, attr) {
						// Remove radix attributes
						if (["data-orientation", "data-state", "data-radix-collection-item"].includes(attr)) {
							return false;
						}
						// Remove known unique attributes
						if (["aria-controls", "aria-labelledby", "id"].includes(attr)) {
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
