import { bunmatch } from "$testlib/bunmatch";
import { Search as ReactSearch } from "@navikt/ds-react";
import { cleanup, render } from "@testing-library/svelte";
import { afterEach, describe, expect, it } from "bun:test";
import { omit } from "../helpers";
import Search from "./Search.svelte";
import type { Props } from "./type";

describe("Search", () => {
	it("renders with HTML similar to ds-react", async () => {
		const props: Props = {
			label: "Label fragment",
			value: "Value",
			searchIconText: "Søk",
		};
		expect(
			await bunmatch(render(Search, props), ReactSearch, {
				props: {
					...omit(props, "searchIconText"),
					clearButtonLabel: "Clear",
				},
				opts: {
					compareAttrs(node, attr) {
						const tagName = node.tagName.toLowerCase();
						if (tagName == "svg" && ["aria-labelledby"].includes(attr)) {
							return false;
						}
						// Known unique attributes
						if (["id", "for", "value"].includes(attr)) {
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
