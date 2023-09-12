import { Label as ReactLabel } from "@navikt/ds-react";
import { cleanup, render } from "@testing-library/svelte";
import type { ComponentProps } from "svelte";
import { afterEach, describe, expect, it } from "vitest";
import Label from "./Label.test.svelte";

describe.concurrent("Label", () => {
	[undefined, "legend", "span"].forEach((as) => {
		[undefined, "small", "medium"].forEach((size) => {
			[undefined, true].forEach((spacing) => {
				it(`renders with HTML similar to ds-react (as: ${as} size: ${size} spacing: ${spacing})`, () => {
					const props: ComponentProps<Label> = {
						as: as as never,
						size: size as never,
						spacing,
					};
					expect(render(Label, props)).toMimicReact(ReactLabel, {
						props,
						children: ["Label content"],
					});
				});
			});
		});
	});

	afterEach(cleanup);
});
