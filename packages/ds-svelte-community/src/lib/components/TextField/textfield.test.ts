import { bunmatch } from "$testlib/bunmatch";
import { TextField as ReactTextField } from "@navikt/ds-react";
import { cleanup, render } from "@testing-library/svelte";
import { afterEach, describe, expect, it } from "vitest";
import TextField from "./TextField.test.svelte";
import type { Props } from "./type";

describe("TextField", () => {
	it("renders with HTML similar to ds-react", async () => {
		const props: Props = {};
		expect(
			await bunmatch(render(TextField, props), ReactTextField, {
				props: {
					label: "Some label",
					description: "Some longer description",
				},
				opts: {
					compareAttrs(node, attr) {
						// Remove attrs known to be unique
						if (["id", "for", "aria-describedby"].includes(attr)) {
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
