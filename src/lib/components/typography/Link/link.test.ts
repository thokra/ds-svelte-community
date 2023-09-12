import { Link as ReactLink } from "@navikt/ds-react";
import { cleanup, render } from "@testing-library/svelte";
import type { ComponentProps } from "svelte";
import { afterEach, describe, expect, it } from "vitest";
import Link from "./Link.test.svelte";
import { variants } from "./type";

describe.concurrent("Link", () => {
	[undefined, "span"].forEach((as) => {
		variants.forEach((variant) => {
			[undefined, false].forEach((underline) => {
				[undefined, true].forEach((inlineText) => {
					it(`renders with HTML similar to ds-react`, () => {
						const props: ComponentProps<Link> = {
							as,
							variant,
							underline,
							inlineText,
							href: "https://nav.no",
						};
						expect(render(Link, props)).toMimicReact(ReactLink, {
							props,
							children: ["Link content"],
						});
					});
				});
			});
		});
	});

	afterEach(cleanup);
});
