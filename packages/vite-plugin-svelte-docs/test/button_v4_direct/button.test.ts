import { describe, expect, test } from "bun:test";
import * as fs from "fs/promises";
import * as path from "path";
import { Doc } from "../../src";
import { Generator } from "../../src/generator";

describe("v4", () => {
	test("button", async () => {
		const filename = path.resolve(import.meta.dir, "Button.svelte").replace(".svelte", ".ts");
		const code = (await fs.readFile(filename.replace(".ts", ".svelte"))).toString();

		const gen = new Generator(require.resolve("svelte2tsx"));
		gen.addSvelteFile(filename, code);
		const doc = gen.docFor(filename, false);
		const expected = {
			description: "",
			props: [
				{
					name: "color",
					description: "Color",
					optional: false,
					type: { type: "string" },
				},
				{
					name: "kind",
					description: "Select some type",
					optional: true,
					default: '"button"',
					type: {
						type: "union",
						values: [
							{
								type: "literal",
								value: '"button"',
							},
							{
								type: "literal",
								value: '"submit"',
							},
							{
								type: "literal",
								value: '"reset"',
							},
						],
					},
				},
			],
			slots: [
				{
					name: "default",
					lets: [],
					description: "",
				},
				{
					name: "named",
					lets: [
						{
							name: "color",
							type: { type: "unknown" },
						},
					],
					description: "",
				},
			],
			events: [
				{
					name: "click",
					description: "",
				},
			],
		} as Doc;

		expect(doc.props).toStrictEqual(expected.props);
		expect(doc.slots).toStrictEqual(expected.slots);
		expect(doc.events).toStrictEqual(expected.events);
	});
});
