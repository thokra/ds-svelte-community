import { bunmatch } from "$testlib/bunmatch";
import { Link as ReactLink } from "@navikt/ds-react";
import { cleanup, render } from "@testing-library/svelte";
import { afterEach, describe, expect, it } from "bun:test";
import { createRawSnippet } from "svelte";
import Link from "./Link.svelte";
import { variants, type LinkProps } from "./type";

describe("Link", () => {
	[undefined, "span" as const].forEach((as) => {
		variants.forEach((variant) => {
			[undefined, false].forEach((underline) => {
				[undefined, true].forEach((inlineText) => {
					it(`renders with HTML similar to ds-react as:${as}, variant:${variant}, underline:${underline}, inlineText:${inlineText}`, async () => {
						const props: LinkProps = {
							as,
							variant,
							underline,
							inlineText,
							href: "https://nav.no",
							children: createRawSnippet(() => ({
								render() {
									return "Link content";
								},
							})),
						};
						expect(
							await bunmatch(render(Link, props), ReactLink, {
								props,
								children: ["Link content"],
							}),
						).toBeTrue();
					});
				});
			});
		});
	});

	afterEach(cleanup);
});
