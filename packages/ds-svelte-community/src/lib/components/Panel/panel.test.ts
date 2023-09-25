import { bunmatch } from "$testlib/bunmatch";
import { Panel as ReactPanel } from "@navikt/ds-react";
import { cleanup, render } from "@testing-library/svelte";
import { afterEach, describe, expect, it } from "bun:test";
import Panel from "./Panel.test.svelte";
import type { Props } from "./type";

describe("Panel", () => {
	it("renders with HTML similar to ds-react", async () => {
		const props: Props = {};
		expect(
			await bunmatch(render(Panel, props), ReactPanel, {
				props,
				children: ["Panel body"],
			}),
		).toBeTrue();
	});

	afterEach(cleanup);
});
