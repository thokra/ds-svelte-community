import { bunmatch } from "$testlib/bunmatch";
import { HStack as ReactHStack, VStack as ReactVStack } from "@navikt/ds-react";
import { cleanup, render } from "@testing-library/svelte";
import React from "react";
import { afterEach, describe, expect, it } from "vitest";
import HStack from "./HStack.svelte";
import Stack, { type StackPropsTest } from "./Stack.test.svelte";
import VStack from "./VStack.svelte";

describe("Stack", () => {
	it("renders HStack with HTML similar to ds-react", async () => {
		const props: StackPropsTest = {
			component: HStack,
		};

		expect(
			await bunmatch(render(Stack, props), ReactHStack, {
				props,
				children: [
					React.createElement("div", { key: "1" }),
					React.createElement("div", { key: "2" }),
				],
			}),
		).toBeTruthy();
	});

	it("renders VStack with HTML similar to ds-react", async () => {
		const props: StackPropsTest = {
			component: VStack,
		};

		expect(
			await bunmatch(render(Stack, props), ReactVStack, {
				props,
				children: [
					React.createElement("div", { key: "1" }),
					React.createElement("div", { key: "2" }),
				],
			}),
		).toBeTruthy();
	});

	afterEach(cleanup);
});
