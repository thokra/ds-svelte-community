import { bunmatch } from "$testlib/bunmatch";
import { BodyShort as ReactBodyShort } from "@navikt/ds-react";
import { cleanup, render } from "@testing-library/svelte";
import { afterEach, describe, expect, it } from "bun:test";
import { createRawSnippet } from "svelte";
import BodyShort from "./BodyShort.svelte";
import type { BodyShortProps } from "./type";

describe("BodyShort", () => {
	[undefined, "span" as const].forEach((as) => {
		[undefined, "small", "medium"].forEach((size) => {
			[undefined, true].forEach((spacing) => {
				it(`renders with HTML similar to ds-react (as: ${as} size: ${size} spacing: ${spacing})`, async () => {
					const props: BodyShortProps = {
						as,
						size: size as never,
						spacing,
						children: createRawSnippet(() => ({
							render() {
								return "Body short content";
							},
						})),
					};
					expect(
						await bunmatch(render(BodyShort, props), ReactBodyShort, {
							props,
							children: ["Body short content"],
						}),
					).toBeTrue();
				});
			});
		});
	});

	afterEach(cleanup);
});
