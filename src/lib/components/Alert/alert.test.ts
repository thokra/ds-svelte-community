import { Alert as ReactAlert } from "@navikt/ds-react";
import { cleanup, render } from "@testing-library/svelte";
import { afterEach, describe, expect, it } from "vitest";
import Alert from "./Alert.test.svelte";
import { sizes, variants, type Props } from "./type";

const wrapper = (name: string, props: Props) => {
	it(name, () => {
		expect(render(Alert, props)).toMimicReact(ReactAlert, {
			props,
			children: ["Some alert"],
			opts: {
				ignoreElementFromB(tag) {
					if (tag == "title") {
						return true;
					}
					return false;
				},
				compareAttrs(tag, name) {
					if (tag == "svg" && name == "aria-labelledby") {
						return false;
					}
					if (tag == "path" && name == "d") {
						return false;
					}
					return true;
				},
			},
		});
	});
};

describe("Alert", () => {
	it("renders an Alert with a label", () => {
		const r = render(Alert, {});
		expect(r.container.innerHTML).toContain("Some alert");
	});

	for (const size of sizes) {
		for (const variant of variants) {
			wrapper(`renders an Alert similar to ds-react with size ${size} and variant ${variant}`, {
				size,
				variant,
			});
		}
	}

	wrapper("renders an Alert similar to ds-react with other props", {
		fullWidth: true,
		inline: true,
		variant: "info",
		// closeButton: true,
	});

	afterEach(cleanup);
});
