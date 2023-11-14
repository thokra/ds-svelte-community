import { bunmatch } from "$testlib/bunmatch";
import { Box as ReactBox } from "@navikt/ds-react";
import { cleanup, render } from "@testing-library/svelte";
import { afterEach, describe, expect, it } from "bun:test";
import Box from "./Box.test.svelte";
import type { BoxProps } from "./type";

describe("Box", () => {
	it("renders with HTML similar to ds-react", async () => {
		const props: BoxProps = {
			background: "surface-default",
			padding: "6",
			paddingInline: "4",
			paddingBlock: "0 6",
			borderRadius: "large",
			shadow: "xsmall",
			borderWidth: "4",
			borderColor: "border-alt-3",
		};

		expect(
			await bunmatch(render(Box, props), ReactBox, {
				props,
				children: ["Box body"],
			}),
		).toBeTrue();
	});

	afterEach(cleanup);
});
