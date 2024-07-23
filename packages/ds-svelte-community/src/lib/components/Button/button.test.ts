import Button from "$lib/components/Button/Button.test.svelte";
import type { Props } from "$lib/components/Button/type";
import { bunmatch } from "$testlib/bunmatch";
import { Button as ReactButton } from "@navikt/ds-react";
import { cleanup, render } from "@testing-library/svelte" with { type: "browser" };
import { afterEach, describe, expect, it } from "vitest";

describe("Button", () => {
	it("renders a button with a label", () => {
		const r = render(Button, {});
		console.log(r.container.innerText);
		expect(r.container.innerText).toContain("Click me!");
	});

	it("renders with HTML similar to ds-react", async () => {
		expect(
			await bunmatch(render(Button, {}), ReactButton, { children: ["Click me!"] }),
		).toBeTruthy();
	});

	it("renders with HTML similar to ds-react with props", async () => {
		cleanup();
		const props: Props = {
			as: "a",
			href: "/",
			variant: "secondary",
			size: "small",
		};
		expect(
			await bunmatch(render(Button, { props }), ReactButton, { props, children: ["Click me!"] }),
		).toBeTruthy();
	});

	it("renders with HTML similar to ds-react with disabled", async () => {
		const props: Props = {
			disabled: true,
		};
		expect(
			await bunmatch(render(Button, { props }), ReactButton, { props, children: ["Click me!"] }),
		).toBeTruthy();
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
			href: "/",
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
		).toBeTruthy();
	});

	afterEach(cleanup);
});
