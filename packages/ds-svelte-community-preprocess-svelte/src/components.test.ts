import { describe, expect, it } from "bun:test";
import { Components } from "./components";

describe("components", () => {
	it("ensure a few components exists", () => {
		expect("Th" in Components.components).toBeTrue();
		expect("Thead" in Components.components).toBeTrue();
	});
});
