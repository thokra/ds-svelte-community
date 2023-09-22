import { Search as ReactSearch } from "@navikt/ds-react";
import { cleanup, render } from "@testing-library/svelte";
import { afterEach, describe, expect, it } from "vitest";
import { omit } from "../helpers";
import Search from "./Search.svelte";
import type { Props } from "./type";

describe.concurrent("Search", () => {
	it("renders with HTML similar to ds-react", () => {
		const props: Props = {
			label: "Label fragment",
			value: "Value",
			searchIconText: "Søk",
		};
		expect(render(Search, props)).toMimicReact(ReactSearch, {
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
		});
	});

	afterEach(cleanup);
});
