import { bunmatch } from "$testlib/bunmatch";
import { Page as ReactPage } from "@navikt/ds-react";
import { cleanup, render } from "@testing-library/svelte";
import React from "react";
import { afterEach, describe, expect, it } from "vitest";
import Page from "./Page.test.svelte";
import type { PageProps } from "./type";

describe("Page", () => {
	it("renders with HTML similar to ds-react", async () => {
		const props: PageProps = {};

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
		).toBeTruthy();
	});

	afterEach(cleanup);
});
