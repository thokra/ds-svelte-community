import { describe, expect, test } from "bun:test";
import * as fs from "fs/promises";
import * as path from "path";
import { join } from "path";
import { Doc } from "../../src";
import { Generator } from "../../src/generator";

describe("v5", () => {
	test("button", async () => {
		const filename = path.resolve(import.meta.dir, "Button.svelte").replace(".svelte", ".ts");
		const code = (await fs.readFile(filename.replace(".ts", ".svelte"))).toString();

		const gen = new Generator(require.resolve("svelte2tsx"));
		gen.addSvelteFile(filename, code);
		const { doc, files } = gen.docFor(filename, false);

		const expected: Doc = {
			name: "Button",
			description: "",
			props: [
				{
					name: "color",
					description: "Color",
					optional: false,
					type: { type: "string" },
				},
				{
					name: "type",
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
					name: "children",
					description: "Default slot",
					lets: [],
					snippet: true,
					optional: false,
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
					optional: true,
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
		};

		expect(doc.props).toStrictEqual(expected.props);
		expect(doc.slots).toStrictEqual(expected.slots);
		expect(doc.events).toStrictEqual(expected.events);
		expect(files).toStrictEqual([join(import.meta.dir, "types.ts")]);
	});
});
