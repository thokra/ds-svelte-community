import { bunmatch } from "$testlib/bunmatch";
import { Detail as ReactDetail } from "@navikt/ds-react";
import { cleanup, render } from "@testing-library/svelte";
import { afterEach, describe, expect, it } from "bun:test";
import type { ComponentProps } from "svelte";
import Detail from "./Detail.test.svelte";

describe("Detail", () => {
	[undefined, "span"].forEach((as) => {
		[undefined, true].forEach((uppercase) => {
			[undefined, true].forEach((spacing) => {
				it(`renders with HTML similar to ds-react (as: ${as} uppercase: ${uppercase} spacing: ${spacing})`, async () => {
					const props: ComponentProps<Detail> = {
						as,
						uppercase,
						spacing,
					};
					expect(
						await bunmatch(render(Detail, props), ReactDetail, {
							props,
							children: ["Detail content"],
						}),
					).toBeTrue();
				});
			});
		});
	});

	afterEach(cleanup);
});
