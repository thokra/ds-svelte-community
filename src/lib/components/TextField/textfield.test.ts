import { TextField as ReactTextField } from "@navikt/ds-react";
import { cleanup, render } from "@testing-library/svelte";
import { afterEach, describe, expect, it } from "vitest";
import TextField from "./TextField.test.svelte";
import type { Props } from "./type";

describe.concurrent("TextField", () => {
	it("renders with HTML similar to ds-react", () => {
		const props: Props = {};
		expect(render(TextField, props)).toMimicReact(ReactTextField, {
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
		});
	});

	afterEach(cleanup);
});
