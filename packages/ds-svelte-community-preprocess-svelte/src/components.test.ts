import { describe, expect, it } from "bun:test";
import { buildComponents } from "./build/components-list";
import { Components } from "./components";

describe("components", () => {
	it("ensure a few components exists", () => {
		expect("Th" in Components.components).toBeTrue();
		expect("Thead" in Components.components).toBeTrue();
	});

	it("is up to date", async () => {
		const current = await buildComponents();
		expect(current).toEqual(Components);
	});
});
