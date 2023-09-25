import { bunmatch } from "$testlib/bunmatch";
import { Loader as ReactLoader } from "@navikt/ds-react";
import { cleanup, render } from "@testing-library/svelte";
import { afterEach, describe, expect, it } from "bun:test";
import Loader from "./Loader.svelte";
import type { Props } from "./type";

describe("Loader", () => {
	it("renders with HTML similar to ds-react", async () => {
		const props: Props = {
			title: "Loading",
		};
		expect(
			await bunmatch(render(Loader, props), ReactLoader, {
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
			}),
		).toBeTrue();
	});

	afterEach(cleanup);
});
