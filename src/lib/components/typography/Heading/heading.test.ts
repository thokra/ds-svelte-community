import { Heading as ReactHeading } from "@navikt/ds-react";
import { cleanup, render } from "@testing-library/svelte";
import type { ComponentProps } from "svelte";
import { afterEach, describe, expect, it } from "vitest";
import Heading from "./Heading.test.svelte";

describe.concurrent("Heading", () => {
	[undefined, "h1", "h2"].forEach((as) => {
		["xlarge", "large", "medium", "small", "xsmall"].forEach((size) => {
			[undefined, true].forEach((spacing) => {
				new Array(6).fill(1).forEach((_, level) => {
					it(`renders with HTML similar to ds-react (as: ${as} size: ${size} spacing: ${spacing} level: ${level})`, () => {
						const props: ComponentProps<Heading> = {
							as: as as never,
							size: size as never,
							spacing,
							level: (level + 1) as never,
						};
						expect(render(Heading, props)).toMimicReact(ReactHeading, {
							props,
							children: ["Heading content"],
						});
					});
				});
			});
		});
	});

	afterEach(cleanup);
});
