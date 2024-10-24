import { bunmatch } from "$testlib/bunmatch";
import { Heading as ReactHeading } from "@navikt/ds-react";
import { cleanup, render } from "@testing-library/svelte";
import { afterEach, describe, expect, it } from "bun:test";
import { createRawSnippet } from "svelte";
import Heading from "./Heading.svelte";
import type { HeadingProps } from "./type";

describe("Heading", () => {
	[undefined, "h1", "h2"].forEach((as) => {
		["xlarge", "large", "medium", "small", "xsmall"].forEach((size) => {
			[undefined, true].forEach((spacing) => {
				new Array(6).fill(1).forEach((_, level) => {
					it(`renders with HTML similar to ds-react (as: ${as} size: ${size} spacing: ${spacing} level: ${level})`, async () => {
						const props: HeadingProps = {
							as: as as never,
							size: size as never,
							spacing,
							level: (level + 1) as never,
							children: createRawSnippet(() => ({
								render() {
									return "Heading content";
								},
							})),
						};
						expect(
							await bunmatch(render(Heading, props), ReactHeading, {
								props,
								children: ["Heading content"],
							}),
						).toBeTrue();
					});
				});
			});
		});
	});

	afterEach(cleanup);
});
