import { Loader as ReactLoader } from "@navikt/ds-react";
import { cleanup, render } from "@testing-library/svelte";
import { afterEach, describe, expect, it } from "vitest";
import Loader from "./Loader.svelte";
import type { Props } from "./type";

describe.concurrent("Loader", () => {
	it("renders with HTML similar to ds-react", () => {
		const props: Props = {};
		expect(render(Loader, props)).toMimicReact(ReactLoader, {
			props: {
				...props,
			},
			opts: {
				compareAttrs(node, attr) {
					const tagName = node.tagName.toLowerCase();
					// Since our icons don't support aria-labelledby and title, we remove it from the comparison,
					// including the aria-label attribute which is used by us
					if (tagName == "svg" && ["aria-labelledby", "aria-label"].includes(attr)) {
						return false;
					}
					return true;
				},
				ignoreElementFromB(tag) {
					if (tag.tagName.toLowerCase() == "title") {
						return true;
					}
					return false;
				},
			},
		});
	});

	afterEach(cleanup);
});
