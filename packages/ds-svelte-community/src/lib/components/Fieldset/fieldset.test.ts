import { bunmatch } from "$testlib/bunmatch";
import { Fieldset as ReactFieldset } from "@navikt/ds-react";
import { cleanup, render } from "@testing-library/svelte";
import { afterEach, describe, expect, it } from "vitest";
import Fieldset from "./Fieldset.test.svelte";
import type { FieldsetProps } from "./type";

describe("Fieldset", () => {
	it("renders with HTML similar to ds-react", async () => {
		const props: FieldsetProps = {
			error: "error",
		};
		expect(
			await bunmatch(render(Fieldset, props), ReactFieldset, {
				props: {
					...props,
					legend: "Legend",
					description: "Description",
				},
				children: ["Fieldset body"],
				opts: {
					compareAttrs(node, attr) {
						// Remove attrs known to be unique
						if (["id", "aria-describedby"].includes(attr)) {
							return false;
						}
						return true;
					},
				},
			}),
		).toBeTruthy();
	});

	afterEach(cleanup);
});
