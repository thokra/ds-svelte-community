import { ErrorMessage as ReactErrorMessage } from "@navikt/ds-react";
import { cleanup, render } from "@testing-library/svelte";
import type { ComponentProps } from "svelte";
import { afterEach, describe, expect, it } from "vitest";
import ErrorMessage from "./ErrorMessage.test.svelte";

describe.concurrent("ErrorMessage", () => {
	[undefined, "span", "div"].forEach((as) => {
		[undefined, "small"].forEach((size) => {
			[undefined, true].forEach((spacing) => {
				it(`renders with HTML similar to ds-react (as: ${as} size: ${size} spacing: ${spacing})`, () => {
					const props: ComponentProps<ErrorMessage> = {
						as: as as never,
						size: size as never,
						spacing,
					};
					expect(render(ErrorMessage, props)).toMimicReact(ReactErrorMessage, {
						props,
						children: ["ErrorMessage content"],
					});
				});
			});
		});
	});

	afterEach(cleanup);
});
