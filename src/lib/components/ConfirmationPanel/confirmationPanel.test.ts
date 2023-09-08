import { ConfirmationPanel as ReactConfirmationPanel } from "@navikt/ds-react";
import { cleanup, render } from "@testing-library/svelte";
import { afterEach, describe, expect, it } from "vitest";
import ConfirmationPanel from "./ConfirmationPanel.test.svelte";
import type { Props } from "./type";

describe.concurrent("ConfirmationPanel", () => {
	it("renders with HTML similar to ds-react", () => {
		const props: Props = {
			value: "val3",
		};
		expect(render(ConfirmationPanel, props)).toMimicReact(ReactConfirmationPanel, {
			props: {
				...props,
				label: "Label fragment",
			},
			children: ["Confirmation body"],
			opts: {
				compareAttrs(node, attr) {
					// Remove attrs known to be unique
					if (["id", "aria-describedby", "for"].includes(attr)) {
						return false;
					}
					return true;
				},
			},
		});
	});

	afterEach(cleanup);
});
