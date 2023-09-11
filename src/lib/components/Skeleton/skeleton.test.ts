import { Skeleton as ReactSkeleton } from "@navikt/ds-react";
import { cleanup, render } from "@testing-library/svelte";
import { afterEach, describe, expect, it } from "vitest";
import Skeleton from "./Skeleton.svelte";
import { variants, type Props } from "./type";

describe.concurrent("Skeleton", () => {
	variants.forEach((variant) => {
		it("renders with HTML similar to ds-react (" + variant + ")", () => {
			const props: Props = {
				variant,
			};
			expect(render(Skeleton, props)).toMimicReact(ReactSkeleton, {
				props,
			});
		});
	});

	afterEach(cleanup);
});
