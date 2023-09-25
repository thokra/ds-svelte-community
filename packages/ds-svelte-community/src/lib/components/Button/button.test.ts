import Button from "$lib/components/Button/Button.test.svelte";
import type { Props } from "$lib/components/Button/type";
import { bunmatch } from "$testlib/bunmatch";
import { Button as ReactButton } from "@navikt/ds-react";
import { cleanup, render } from "@testing-library/svelte";
import { afterEach, describe, expect, it } from "bun:test";

describe("Button", () => {
	it("renders a button with a label", () => {
		const r = render(Button, {});
		expect(r.container.innerHTML).toContain("Click me!");
	});

	it("renders with HTML similar to ds-react", async () => {
		expect(await bunmatch(render(Button, {}), ReactButton, { children: ["Click me!"] })).toBeTrue();
	});

	it("renders with HTML similar to ds-react with props", async () => {
		cleanup();
		const props: Props = {
			as: "a",
			variant: "secondary",
			size: "small",
		};
		expect(
			await bunmatch(render(Button, { props }), ReactButton, { props, children: ["Click me!"] }),
		).toBeTrue();
	});

	it("renders with HTML similar to ds-react with disabled", async () => {
		const props: Props = {
			disabled: true,
		};
		expect(
			await bunmatch(render(Button, { props }), ReactButton, { props, children: ["Click me!"] }),
		).toBeTrue();
	});

	// Cannot test loading because of client side check required
	// it("renders with HTML similar to ds-react with loading", () => {
	// 	const props: Props = {
	// 		loading: true,
	// 	};
	// 	bunmatch(render(Button, { props }), ReactButton, { props, children: ["Click me!"] });
	// });

	it("renders with HTML similar to ds-react with disabled with as", async () => {
		const props: Props = {
			as: "a",
			disabled: true,
		};
		expect(
			await bunmatch(render(Button, { props }), ReactButton, {
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
			}),
		).toBeTrue();
	});

	afterEach(cleanup);
});
