import { Panel as ReactPanel } from "@navikt/ds-react";
import { cleanup, render } from "@testing-library/svelte";
import { afterEach, describe, expect, it } from "vitest";
import Panel from "./Panel.test.svelte";
import type { Props } from "./type";

describe.concurrent("Panel", () => {
	it("renders with HTML similar to ds-react", () => {
		const props: Props = {};
		expect(render(Panel, props)).toMimicReact(ReactPanel, {
			props,
			children: ["Panel body"],
		});
	});

	afterEach(cleanup);
});
