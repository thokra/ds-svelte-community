import { Switch as ReactSwitch } from "@navikt/ds-react";
import { cleanup, render } from "@testing-library/svelte";
import type { ComponentProps } from "svelte";
import { afterEach, describe, expect, it } from "vitest";
import { omit } from "../helpers";
import Switch from "./Switch.svelte";

describe.concurrent("Switch", () => {
	[false, true].forEach((checked) => {
		it(`renders with HTML similar to ds-react checked ${checked}`, () => {
			const props: ComponentProps<Switch> = {
				checked,
				deactivateLabel: "Deaktiver valg",
			};
			expect(render(Switch, props)).toMimicReact(ReactSwitch, {
				props: omit(props, "deactivateLabel"),
				opts: {
					compareAttrs(node, attr) {
						// For some reason the checked attribute isn't set on the input element
						if (node.tagName.toLowerCase() == "input" && attr == "checked") {
							return false;
						}

						// Remove attrs known to be unique
						if (["id", "for"].includes(attr)) {
							return false;
						}
						return true;
					},
				},
			});
		});
	});

	afterEach(cleanup);
});
