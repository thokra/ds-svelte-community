import { Alert as ReactAlert } from "@navikt/ds-react";
import { cleanup, render } from "@testing-library/svelte";
import { afterEach, describe, expect, it } from "vitest";
import Alert from "./Alert.test.svelte";
import type { Props } from "./type";

describe("Alert", () => {
	it("renders a Alert with a label", () => {
		const r = render(Alert, {});
		expect(r.container.innerHTML).toContain("Some alert");
	});

	it("renders with HTML similar to ds-react", () => {
		const props: Props = {
			variant: "error",
		};
		expect(render(Alert, props)).toMimicReact(ReactAlert, {
			props,
			children: ["Some alert"],
		});
	});

	afterEach(cleanup);
});
