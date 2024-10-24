import { bunmatch } from "$testlib/bunmatch";
import { ErrorMessage as ReactErrorMessage } from "@navikt/ds-react";
import { cleanup, render } from "@testing-library/svelte";
import { afterEach, describe, expect, it } from "bun:test";
import { createRawSnippet } from "svelte";
import ErrorMessage from "./ErrorMessage.svelte";
import type { ErrorMessageProps } from "./type";

describe("ErrorMessage", () => {
	[undefined, "span", "div"].forEach((as) => {
		[undefined, "small"].forEach((size) => {
			[undefined, true].forEach((spacing) => {
				it(`renders with HTML similar to ds-react (as: ${as} size: ${size} spacing: ${spacing})`, async () => {
					const props: ErrorMessageProps = {
						as: as as never,
						size: size as never,
						spacing,
						children: createRawSnippet(() => ({
							render() {
								return "ErrorMessage content";
							},
						})),
					};
					expect(
						await bunmatch(render(ErrorMessage, props), ReactErrorMessage, {
							props,
							children: ["ErrorMessage content"],
						}),
					).toBeTrue();
				});
			});
		});
	});

	afterEach(cleanup);
});
