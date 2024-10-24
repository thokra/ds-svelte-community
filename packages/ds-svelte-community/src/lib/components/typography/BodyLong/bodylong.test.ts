import { bunmatch } from "$testlib/bunmatch";
import { BodyLong as ReactBodyLong } from "@navikt/ds-react";
import { cleanup, render } from "@testing-library/svelte";
import { afterEach, describe, expect, it } from "bun:test";
import { createRawSnippet } from "svelte";
import BodyLong from "./BodyLong.svelte";
import type { BodyLongProps } from "./type";

describe("BodyLong", () => {
	[undefined, "span" as const].forEach((as) => {
		[undefined, "small", "medium"].forEach((size) => {
			[undefined, true].forEach((spacing) => {
				it(`renders with HTML similar to ds-react (as: ${as} size: ${size} spacing: ${spacing})`, async () => {
					const props: BodyLongProps = {
						as,
						size: size as never,
						spacing,
						children: createRawSnippet(() => ({
							render() {
								return "Body long content";
							},
						})),
					};
					expect(
						await bunmatch(render(BodyLong, props), ReactBodyLong, {
							props,
							children: ["Body long content"],
						}),
					).toBeTrue();
				});
			});
		});
	});

	afterEach(cleanup);
});
