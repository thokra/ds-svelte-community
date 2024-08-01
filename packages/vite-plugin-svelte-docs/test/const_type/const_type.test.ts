import { describe, expect, test } from "bun:test";
import * as fs from "fs/promises";
import * as path from "path";
import { Generator } from "../../src/generator.js";

describe("const type", () => {
	test("inline", async () => {
		const filename = path.resolve(import.meta.dir, "Component.svelte").replace(".svelte", ".ts");
		const code = (await fs.readFile(filename.replace(".ts", ".svelte"))).toString();

		const gen = new Generator(require.resolve("svelte2tsx"));
		await gen.setup();
		gen.addSvelteFile(filename, code);

		const { doc } = gen.docFor(filename, false);
		expect(doc).toMatchSnapshot();
	});
});
