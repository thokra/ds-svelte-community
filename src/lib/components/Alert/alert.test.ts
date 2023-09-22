import { Alert as ReactAlert } from "@navikt/ds-react";
import { cleanup, render } from "@testing-library/svelte";
import { afterEach, describe, expect, it } from "vitest";
import Alert from "./Alert.test.svelte";
import { sizes, variants, type Props } from "./type";

const wrapper = (name: string, props: Props, iconTitle: string = "") => {
	it(name, () => {
		expect(
			render(Alert, {
				...props,
				iconTitleText: iconTitle,
			}),
		).toMimicReact(ReactAlert, {
			props,
			children: ["Some alert"],
			opts: {
				compareAttrs(node, attr) {
					const tag = node.tagName.toLowerCase();
					if (tag == "svg" && attr == "aria-labelledby") {
						return false;
					}
					if (tag == "title" && attr == "id") {
						return false;
					}
					// Because the warning icon is different
					if (props.variant == "warning" && tag == "path" && attr == "d") {
						return false;
					}
					return true;
				},
			},
		});
	});
};

describe.concurrent("Alert", () => {
	it("renders an Alert with a label", () => {
		const r = render(Alert, { iconTitleText: "Informasjon" });
		expect(r.container.innerHTML).toContain("Some alert");
	});

	const iconTexts: Record<(typeof variants)[number], string> = {
		error: "Feil",
		warning: "Advarsel",
		info: "Informasjon",
		success: "Suksess",
	};
	for (const size of sizes) {
		for (const variant of variants) {
			wrapper(
				`renders an Alert similar to ds-react with size ${size} and variant ${variant}`,
				{
					size,
					variant,
				},
				iconTexts[variant],
			);
		}
	}

	wrapper(
		"renders an Alert similar to ds-react with other props",
		{
			fullWidth: true,
			inline: true,
			variant: "info",
			// closeButton: true,
		},
		"Informasjon",
	);

	afterEach(cleanup);
});
