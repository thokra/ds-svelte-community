import { Stepper as ReactStepper } from "@navikt/ds-react";
import { cleanup, render } from "@testing-library/svelte";
import React from "react";
import { afterEach, describe, expect, it } from "vitest";
import Stepper from "./Stepper.test.svelte";
import type { Props } from "./type";

describe.concurrent("Stepper", () => {
	it("renders with HTML similar to ds-react", () => {
		const props: Props = {
			activeStep: 3,
		};
		expect(render(Stepper, props)).toMimicReact(ReactStepper, {
			props,
			children: [
				React.createElement(ReactStepper.Step, {
					href: "#f1",
					completed: true,
					children: "Account information",
				} as never),
				React.createElement(ReactStepper.Step, {
					href: "#f2",
					completed: true,
					children: "About you",
				} as never),
				React.createElement(ReactStepper.Step, {
					href: "#f3",
					completed: false,
					children: "How did you hear about us",
				} as never),
				React.createElement(ReactStepper.Step, {
					href: "#f4",
					interactive: false,
					children: "Confirmation",
				} as never),
			],
			opts: {
				compareAttrs(node, attr) {
					const tagName = node.tagName.toLowerCase();
					// Svelte aria checks warn about missing role and tabindex when having an onclick handler
					if (tagName == "a" && ["role", "tabindex"].includes(attr)) {
						return false;
					}
					return true;
				},
			},
		});
	});

	afterEach(cleanup);
});
