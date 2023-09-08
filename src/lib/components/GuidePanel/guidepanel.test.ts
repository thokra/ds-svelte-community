import { GuidePanel as ReactGuidePanel } from "@navikt/ds-react";
import { cleanup, render } from "@testing-library/svelte";
import { afterEach, describe, expect, it } from "vitest";
import GuidePanel from "./GuidePanel.test.svelte";
import type { Props } from "./type";

describe.concurrent("GuidePanel", () => {
	it("renders with HTML similar to ds-react", () => {
		const props: Props = {};
		expect(render(GuidePanel, props)).toMimicReact(ReactGuidePanel, {
			props: {
				...props,
			},
			children: ["Guide Panel Content"],
		});
	});

	afterEach(cleanup);
});
