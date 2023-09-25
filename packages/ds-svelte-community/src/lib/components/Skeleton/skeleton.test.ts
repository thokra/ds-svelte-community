import { bunmatch } from "$testlib/bunmatch";
import { Skeleton as ReactSkeleton } from "@navikt/ds-react";
import { cleanup, render } from "@testing-library/svelte";
import { afterEach, describe, expect, it } from "bun:test";
import Skeleton from "./Skeleton.svelte";
import { variants, type Props } from "./type";

describe("Skeleton", () => {
	variants.forEach((variant) => {
		it("renders with HTML similar to ds-react (" + variant + ")", async () => {
			const props: Props = {
				variant,
			};
			expect(
				await bunmatch(render(Skeleton, props), ReactSkeleton, {
					props,
				}),
			).toBeTrue();
		});
	});

	afterEach(cleanup);
});
