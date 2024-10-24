import { bunmatch } from "$testlib/bunmatch";
import { Page as ReactPage } from "@navikt/ds-react";
import { cleanup, render } from "@testing-library/svelte";
import { afterEach, describe, expect, it } from "bun:test";
import React from "react";
import Page from "./Page.test.svelte";
import type { PageProps } from "./type";

describe("Page", () => {
	it("renders with HTML similar to ds-react", async () => {
		const props: Omit<PageProps, "children"> = {};

		expect(
			await bunmatch(render(Page, props), ReactPage, {
				props: {
					...props,
					footer: React.createElement(ReactPage.Block, { as: "footer" }, ["Footer"]),
				},
				children: [
					React.createElement(ReactPage.Block, { gutters: true, width: "lg", as: "div" }, [
						"Header",
					]),
					React.createElement(ReactPage.Block, { gutters: true, width: "lg", as: "div" }, [
						"Content",
					]),
				],
			}),
		).toBeTrue();
	});

	afterEach(cleanup);
});
