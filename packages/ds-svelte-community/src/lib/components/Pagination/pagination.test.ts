import { bunmatch } from "$testlib/bunmatch";
import { Pagination as ReactPagination } from "@navikt/ds-react";
import { cleanup, render } from "@testing-library/svelte";
import { afterEach, describe, expect, it } from "bun:test";
import Pagination from "./Pagination.test.svelte";
import type { Props } from "./type";

describe("Pagination", () => {
	it("renders with HTML similar to ds-react", async () => {
		const props: Props = {
			count: 100,
			page: 22,
		};
		const svelteProps = {
			...props,
			nextText: "Neste",
			prevText: "Forrige",
		};
		expect(
			await bunmatch(render(Pagination, svelteProps), ReactPagination, {
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
			}),
		).toBeTrue();
	});

	afterEach(cleanup);
});
