import { Search as ReactSearch } from "@navikt/ds-react";
import { cleanup, render } from "@testing-library/svelte";
import { afterEach, describe, expect, it } from "vitest";
import Search from "./Search.svelte";
import type { Props } from "./type";

describe.concurrent("Search", () => {
	it("renders with HTML similar to ds-react", () => {
		const props: Props = {
			label: "Label fragment",
			value: "Value",
		};
		expect(render(Search, props)).toMimicReact(ReactSearch, {
			props: {
				...props,
				clearButtonLabel: "Clear",
			},
			opts: {
				ignoreElementFromB(tag) {
					const tagName = tag.tagName.toLowerCase();
					if (tagName == "title") {
						return true;
					}

					return false;
				},

				compareAttrs(node, attr) {
					const tagName = node.tagName.toLowerCase();
					if (tagName == "svg" && ["aria-label", "aria-labelledby"].includes(attr)) {
						return false;
					}
					if (tagName == "path" && attr == "d") {
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
