import { BodyLong as ReactBodyLong } from "@navikt/ds-react";
import { cleanup, render } from "@testing-library/svelte";
import type { ComponentProps } from "svelte";
import { afterEach, describe, expect, it } from "vitest";
import BodyLong from "./BodyLong.test.svelte";

describe.concurrent("BodyLong", () => {
	[undefined, "span"].forEach((as) => {
		[undefined, "small", "medium"].forEach((size) => {
			[undefined, true].forEach((spacing) => {
				it(`renders with HTML similar to ds-react (as: ${as} size: ${size} spacing: ${spacing})`, () => {
					const props: ComponentProps<BodyLong> = {
						as,
						size: size as never,
						spacing,
					};
					expect(render(BodyLong, props)).toMimicReact(ReactBodyLong, {
						props,
						children: ["Body long content"],
					});
				});
			});
		});
	});

	afterEach(cleanup);
});
