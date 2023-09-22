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
		const svelteProps = {
			...props,
			nextText: "Neste",
			prevText: "Forrige",
		};
		expect(render(Pagination, svelteProps)).toMimicReact(ReactPagination, {
			props,
			opts: {
				compareAttrs(node, attr) {
					const tagName = node.tagName.toLowerCase();
					if (tagName == "svg" && ["aria-labelledby"].includes(attr)) {
						return false;
					}
					if (tagName == "title" && ["id"].includes(attr)) {
						return false;
					}
					return true;
				},
			},
		});
	});

	afterEach(cleanup);
});
