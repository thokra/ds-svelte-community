import { bunmatch } from "$testlib/bunmatch";
import { Select as ReactSelect } from "@navikt/ds-react";
import { cleanup, render } from "@testing-library/svelte";
import React from "react";
import { afterEach, describe, expect, it } from "vitest";
import Select from "./Select.test.svelte";
import type { Props } from "./type";

describe("Select", () => {
	it("renders with HTML similar to ds-react", async () => {
		const props: Props = {
			label: "Select country",
		};
		expect(
			await bunmatch(render(Select, props), ReactSelect, {
				props,
				children: [
					React.createElement("option", { value: "" }, "Choose country"),
					React.createElement("option", { value: "norway" }, "Norway"),
					React.createElement("option", { value: "sweden" }, "Sweden"),
					React.createElement("option", { value: "denmark" }, "Denmark"),
				],
				opts: {
					compareAttrs(node, attr) {
						if (node.tagName.toLowerCase() == "path" && attr == "d") {
							return false;
						}

						// Remove attrs known to be unique
						if (["id", "for"].includes(attr)) {
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
