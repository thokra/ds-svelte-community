import { describe, expect, test } from "bun:test";
import * as fs from "fs/promises";
import * as path from "path";
import { Doc } from "../../src";
import { Generator } from "../../src/generator";

describe("v5", () => {
	test("pick_full", async () => {
		const filename = path.resolve(import.meta.dir, "Pick.svelte").replace(".svelte", ".ts");
		const code = (await fs.readFile(filename.replace(".ts", ".svelte"))).toString();

		const gen = new Generator(require.resolve("svelte2tsx"));
		await gen.setup();
		gen.addSvelteFile(filename, code);
		const { doc } = gen.docFor(filename, false);

		const expected: Doc = {
			name: "Pick",
			description: "",
			props: [
				{
					description: "",
					name: "c",
					optional: false,
					type: {
						type: "number",
					},
				},
				{
					default: '"default"',
					description: "",
					name: "a",
					optional: true,
					type: {
						type: "string",
					},
				},
			],
			slots: [],
			events: [],
		};

		expect(doc.props).toStrictEqual(expected.props);
		expect(doc.slots).toStrictEqual(expected.slots);
		expect(doc.events).toStrictEqual(expected.events);
	});
});
