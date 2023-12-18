import { expect } from "bun:test";
import { toMimicReact } from "./htmldiff";

expect.extend({
	toMimicReact: async (actual: unknown, react: unknown, options: unknown) => {
		return await toMimicReact(actual as never, react, options as never);
	},
});
