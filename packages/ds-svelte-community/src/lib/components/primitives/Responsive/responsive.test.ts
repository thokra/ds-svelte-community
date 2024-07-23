import { bunmatch } from "$testlib/bunmatch";
import { Hide as ReactHide, Show as ReactShow } from "@navikt/ds-react";
import { cleanup, render } from "@testing-library/svelte";
import { afterEach, describe, expect, it } from "vitest";
import Hide from "./Hide.test.svelte";
import Show from "./Show.test.svelte";
import type { BaseResponsiveProps } from "./type";

describe("Responsive", () => {
	describe("Show", () => {
		it("renders with HTML similar to ds-react", async () => {
			const props: BaseResponsiveProps = {
				above: "xl",
				below: "xl",
			};

			expect(
				await bunmatch(render(Show, props), ReactShow, {
					props,
					children: ["body"],
				}),
			).toBeTruthy();
		});
	});

	describe("Hide", () => {
		it("renders with HTML similar to ds-react", async () => {
			const props: BaseResponsiveProps = {
				above: "xl",
				below: "xl",
			};

			expect(
				await bunmatch(render(Hide, props), ReactHide, {
					props,
					children: ["body"],
				}),
			).toBeTruthy();
		});
	});

	afterEach(cleanup);
});
