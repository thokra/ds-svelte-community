import { bunmatch } from "$testlib/bunmatch";
import { Bleed as ReactBleed } from "@navikt/ds-react";
import { cleanup, render } from "@testing-library/svelte";
import { afterEach, describe, expect, it } from "vitest";
import Bleed from "./Bleed.test.svelte";
import type { BleedProps } from "./type";

describe("Bleed", () => {
	it("renders with HTML similar to ds-react", async () => {
		const props: BleedProps = {
			marginInline: "4",
			marginBlock: "4",
			reflectivePadding: true,
		};

		expect(
			await bunmatch(render(Bleed, props), ReactBleed, {
				props,
				children: ["Bleed body"],
			}),
		).toBeTruthy();
	});

	afterEach(cleanup);
});
