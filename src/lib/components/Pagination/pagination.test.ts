import { Pagination as ReactPagination } from "@navikt/ds-react";
import { cleanup, render } from "@testing-library/svelte";
import { afterEach, describe, expect, it } from "vitest";
import Pagination from "./Pagination.test.svelte";
import type { Props } from "./type";

describe.concurrent("Pagination", () => {
	it("renders with HTML similar to ds-react", () => {
		const props: Props = {
			count: 100,
			page: 22,
		};
		expect(render(Pagination, props)).toMimicReact(ReactPagination, {
			props,
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
					return true;
				},
			},
		});
	});

	afterEach(cleanup);
});
