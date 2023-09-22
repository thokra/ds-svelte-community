import { Loader as ReactLoader } from "@navikt/ds-react";
import { cleanup, render } from "@testing-library/svelte";
import { afterEach, describe, expect, it } from "vitest";
import Loader from "./Loader.svelte";
import type { Props } from "./type";

describe.concurrent("Loader", () => {
	it("renders with HTML similar to ds-react", () => {
		const props: Props = {
			title: "Loading",
		};
		expect(render(Loader, props)).toMimicReact(ReactLoader, {
			props: {
				...props,
			},
			opts: {
				compareAttrs(node, attr) {
					const tagName = node.tagName.toLowerCase();
					// Title ids are unique
					if (tagName == "svg" && ["aria-labelledby"].includes(attr)) {
						return false;
					}

					if (tagName == "title" && attr == "id") {
						return false;
					}
					return true;
				},
			},
		});
	});

	afterEach(cleanup);
});
