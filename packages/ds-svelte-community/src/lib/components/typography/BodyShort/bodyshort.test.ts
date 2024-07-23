import { bunmatch } from "$testlib/bunmatch";
import { BodyShort as ReactBodyShort } from "@navikt/ds-react";
import { cleanup, render } from "@testing-library/svelte";
import type { ComponentProps } from "svelte";
import { afterEach, describe, expect, it } from "vitest";
import BodyShort from "./BodyShort.test.svelte";

describe("BodyShort", () => {
	[undefined, "span"].forEach((as) => {
		[undefined, "small", "medium"].forEach((size) => {
			[undefined, true].forEach((spacing) => {
				it(`renders with HTML similar to ds-react (as: ${as} size: ${size} spacing: ${spacing})`, async () => {
					const props: ComponentProps<BodyShort> = {
						as,
						size: size as never,
						spacing,
					};
					expect(
						await bunmatch(render(BodyShort, props), ReactBodyShort, {
							props,
							children: ["Body short content"],
						}),
					).toBeTruthy();
				});
			});
		});
	});

	afterEach(cleanup);
});
