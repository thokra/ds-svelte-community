import { describe, expect, test } from "bun:test";
import * as fs from "fs/promises";
import * as path from "path";
import { Doc } from "../../src";
import { Generator } from "../../src/generator";

describe("v4 alias", () => {
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
					description: "",
					optional: false,
					type: { type: "string" },
				},
				{
					name: "kind",
					description: "Select some type",
					default: '"button"',
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
			],
			slots: [
				{
					name: "default",
					lets: [],
					description: "",
					optional: true,
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
					optional: true,
				},
			],
			events: [
				{
					description: "",
					name: "click",
					optional: true,
				},
			],
		} as Doc;

		expect(doc.props).toStrictEqual(expected.props);
		expect(doc.slots).toStrictEqual(expected.slots);
		expect(doc.events).toStrictEqual(expected.events);
	});
});
