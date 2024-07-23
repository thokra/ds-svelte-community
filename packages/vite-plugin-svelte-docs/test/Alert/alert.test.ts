import { describe, expect, test } from "bun:test";
import * as fs from "fs/promises";
import * as path from "path";
import { Doc } from "../../src";
import { Generator } from "../../src/generator";

describe("v5", () => {
	test("alert", async () => {
		const filename = path.resolve(import.meta.dir, "Alert.svelte").replace(".svelte", ".ts");
		const code = (await fs.readFile(filename.replace(".ts", ".svelte"))).toString();

		const gen = new Generator(require.resolve("svelte2tsx"));
		gen.addSvelteFile(filename, code);
		const { doc } = gen.docFor(filename, true);

		const expected: Doc = {
			name: "Alert",
			description: "",
			props: [
				{
					default: "false",
					description: "Removes border-radius",
					name: "fullWidth",
					optional: true,
					type: {
						type: "boolean",
					},
				},
				{
					default: '""',
					description: "Title attribute on the icon",
					name: "iconTitleText",
					optional: true,
					type: {
						type: "string",
					},
				},
				{
					default: "false",
					description: "Removes background from Alert",
					name: "inline",
					optional: true,
					type: {
						type: "boolean",
					},
				},
				{
					default: '"medium"',
					description: "Changes padding and font-sizes",
					name: "size",
					optional: true,
					type: {
						type: "union",
						values: [
							{
								type: "literal",
								value: '"medium"',
							},
							{
								type: "literal",
								value: '"small"',
							},
						],
					},
				},
				{
					default: '"info"',
					description: "Changes colors and icon usage when changed",
					name: "variant",
					optional: true,
					type: {
						type: "union",
						values: [
							{
								type: "literal",
								value: '"error"',
							},
							{
								type: "literal",
								value: '"warning"',
							},
							{
								type: "literal",
								value: '"info"',
							},
							{
								type: "literal",
								value: '"success"',
							},
						],
					},
				},
			],
			slots: [
				{
					description: "Alert content",
					lets: [],
					name: "children",
					optional: false,
					snippet: true,
				},
			],
			events: [],
		};

		expect(doc.props).toStrictEqual(expected.props);
		expect(doc.slots).toStrictEqual(expected.slots);
		expect(doc.events).toStrictEqual(expected.events);
	});
});
