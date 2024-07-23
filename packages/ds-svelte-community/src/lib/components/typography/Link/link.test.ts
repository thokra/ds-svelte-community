import { bunmatch } from "$testlib/bunmatch";
import { Link as ReactLink } from "@navikt/ds-react";
import { cleanup, render } from "@testing-library/svelte";
import type { ComponentProps } from "svelte";
import { afterEach, describe, expect, it } from "vitest";
import Link from "./Link.test.svelte";
import { variants } from "./type";

describe("Link", () => {
	[undefined, "span"].forEach((as) => {
		variants.forEach((variant) => {
			[undefined, false].forEach((underline) => {
				[undefined, true].forEach((inlineText) => {
					it(`renders with HTML similar to ds-react as:${as}, variant:${variant}, underline:${underline}, inlineText:${inlineText}`, async () => {
						const props: ComponentProps<Link> = {
							as,
							variant,
							underline,
							inlineText,
							href: "https://nav.no",
						};
						expect(
							await bunmatch(render(Link, props), ReactLink, {
								props,
								children: ["Link content"],
							}),
						).toBeTruthy();
					});
				});
			});
		});
	});

	afterEach(cleanup);
});
