import "@testing-library/jest-dom/vitest";
import { expect } from "vitest";
import { toMimicReact } from "./htmldiff";

expect.extend({
	toMimicReact: async (actual: unknown, react: unknown, options: unknown) => {
		return await toMimicReact(actual as never, react, options as never);
	},
});
