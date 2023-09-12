import { Fieldset as ReactFieldset } from "@navikt/ds-react";
import { cleanup, render } from "@testing-library/svelte";
import { afterEach, describe, expect, it } from "vitest";
import Fieldset from "./Fieldset.test.svelte";
import type { FieldsetProps } from "./type";

describe.concurrent("Fieldset", () => {
	it("renders with HTML similar to ds-react", () => {
		const props: FieldsetProps = {
			error: "error",
		};
		expect(render(Fieldset, props)).toMimicReact(ReactFieldset, {
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
		});
	});

	afterEach(cleanup);
});
