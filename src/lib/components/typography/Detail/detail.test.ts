import { Detail as ReactDetail } from "@navikt/ds-react";
import { cleanup, render } from "@testing-library/svelte";
import type { ComponentProps } from "svelte";
import { afterEach, describe, expect, it } from "vitest";
import Detail from "./Detail.test.svelte";

describe.concurrent("Detail", () => {
	[undefined, "span"].forEach((as) => {
		[undefined, true].forEach((uppercase) => {
			[undefined, true].forEach((spacing) => {
				it(`renders with HTML similar to ds-react (as: ${as} uppercase: ${uppercase} spacing: ${spacing})`, () => {
					const props: ComponentProps<Detail> = {
						as,
						uppercase,
						spacing,
					};
					expect(render(Detail, props)).toMimicReact(ReactDetail, {
						props,
						children: ["Detail content"],
					});
				});
			});
		});
	});

	afterEach(cleanup);
});
