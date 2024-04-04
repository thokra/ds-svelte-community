import { describe, expect, test } from "bun:test";
import * as fs from "fs/promises";
import * as path from "path";
import { Doc } from "../../src";
import { Generator } from "../../src/generator";

describe("v5", () => {
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
					name: "type",
					description: "Select some type",
					optional: true,
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
				{
					name: "color",
					description: "Color",
					optional: false,
					type: { type: "string" },
				},
			],
			slots: [
				{
					name: "children",
					description: "Default slot",
					lets: [],
					snippet: true,
				},
				{
					name: "named",
					description: "",
					lets: [
						{
							name: "let_0",
							type: { type: "string" },
						},
					],
					snippet: true,
				},
			],
			events: [
				{
					description: "",
					name: "onClick",
					optional: true,
					type: {
						signature: "(e: MouseEvent) => void",
						type: "function",
					},
				},
			],
		} as Doc;

		expect(doc.props).toStrictEqual(expected.props);
		expect(doc.slots).toStrictEqual(expected.slots);
		expect(doc.events).toStrictEqual(expected.events);
	});
});
