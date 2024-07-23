import { cleanup } from "@testing-library/svelte";
import { afterEach, describe, it } from "vitest";

describe("Tooltip", () => {
	it.skip("renders with HTML similar to ds-react. This is known different than ds-react", () => {
		// Because React allows you to iterate on children, ds-svelte includes a wrapper div with the functionality of the Tooltip component.
		// This changes how to desired HTML looks.
	});

	afterEach(cleanup);
});
