import { Button as ReactButton } from "@navikt/ds-react";
import { cleanup, render } from "@testing-library/svelte";
import { afterEach, describe, expect, it } from "vitest";
import Button from "./Button.test.svelte";
import type { Props } from "./type";

describe.concurrent("Button", () => {
	it("renders a button with a label", () => {
		const r = render(Button, {});
		expect(r.container.innerHTML).toContain("Click me!");
	});

	it("renders with HTML similar to ds-react", () => {
		expect(render(Button, {})).toMimicReact(ReactButton, { children: ["Click me!"] });
	});

	it("renders with HTML similar to ds-react with props", () => {
		const props: Props = {
			as: "a",
			variant: "secondary",
			size: "small",
		};
		expect(render(Button, { props })).toMimicReact(ReactButton, { props, children: ["Click me!"] });
	});

	it("renders with HTML similar to ds-react with disabled", () => {
		const props: Props = {
			disabled: true,
		};
		expect(render(Button, { props })).toMimicReact(ReactButton, { props, children: ["Click me!"] });
	});

	// Cannot test loading because of client side check required
	// it("renders with HTML similar to ds-react with loading", () => {
	// 	const props: Props = {
	// 		loading: true,
	// 	};
	// 	expect(render(Button, { props })).toMimicReact(ReactButton, { props, children: ["Click me!"] });
	// });

	it("renders with HTML similar to ds-react with disabled with as", () => {
		const props: Props = {
			as: "a",
			disabled: true,
		};
		expect(render(Button, { props })).toMimicReact(ReactButton, {
			props,
			children: ["Click me!"],
			opts: {
				alterAttrValue: (name, value) => {
					if (name == "disabled" && value == "true") {
						return "";
					}
					return value;
				},
			},
		});
	});

	afterEach(cleanup);
});
