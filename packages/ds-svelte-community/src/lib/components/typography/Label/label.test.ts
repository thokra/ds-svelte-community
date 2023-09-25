import { bunmatch } from "$testlib/bunmatch";
import { Label as ReactLabel } from "@navikt/ds-react";
import { cleanup, render } from "@testing-library/svelte";
import { afterEach, describe, expect, it } from "bun:test";
import type { ComponentProps } from "svelte";
import Label from "./Label.test.svelte";

describe("Label", () => {
	[undefined, "legend", "span"].forEach((as) => {
		[undefined, "small", "medium"].forEach((size) => {
			[undefined, true].forEach((spacing) => {
				it(`renders with HTML similar to ds-react (as: ${as} size: ${size} spacing: ${spacing})`, async () => {
					const props: ComponentProps<Label> = {
						as: as as never,
						size: size as never,
						spacing,
					};
					expect(
						await bunmatch(render(Label, props), ReactLabel, {
							props,
							children: ["Label content"],
						}),
					).toBeTrue();
				});
			});
		});
	});

	afterEach(cleanup);
});
