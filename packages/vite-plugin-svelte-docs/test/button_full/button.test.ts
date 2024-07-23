import { describe, expect, test } from "bun:test";
import * as fs from "fs/promises";
import * as path from "path";
import { Doc } from "../../src";
import { Generator } from "../../src/generator";

describe("v5", () => {
	test("button_full", async () => {
		const filename = path.resolve(import.meta.dir, "Button.svelte").replace(".svelte", ".ts");
		const code = (await fs.readFile(filename.replace(".ts", ".svelte"))).toString();

		const gen = new Generator(require.resolve("svelte2tsx"));
		gen.addSvelteFile(filename, code);
		const { doc } = gen.docFor(filename, false);

		const expected: Doc = {
			name: "Button",
			description: "",
			props: [
				{
					default: '"button"',
					description: "",
					name: "as",
					optional: false,
					type: {
						type: "literal",
						value: '"button"',
					},
				},
				{
					description: "",
					name: "href",
					optional: false,
					type: {
						type: "string",
					},
				},
				{
					default: "false",
					description:
						"**Avoid using if possible for accessibility purposes.**\n\nPrevent the user from interacting with the button: it cannot be pressed or focused.",
					name: "disabled",
					optional: true,
					type: {
						type: "boolean",
					},
				},
				{
					default: "false",
					description: "Replaces button content with a Loader component, keeps width.",
					name: "loading",
					optional: true,
					type: {
						type: "boolean",
					},
				},
				{
					bindable: true,
					description: "Ref is the button element. Bind to this to obtain the button element.",
					name: "ref",
					optional: true,
					type: {
						name: "Element",
						type: "interface",
					},
				},
				{
					default: '"medium"',
					description: "Changes padding, height, and font-size.",
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
							{
								type: "literal",
								value: '"xsmall"',
							},
						],
					},
				},
				{
					default: '"primary"',
					description: "Changes design and interaction-visuals.",
					name: "variant",
					optional: true,
					type: {
						type: "union",
						values: [
							{
								type: "literal",
								value: '"primary"',
							},
							{
								type: "literal",
								value: '"primary-neutral"',
							},
							{
								type: "literal",
								value: '"secondary"',
							},
							{
								type: "literal",
								value: '"secondary-neutral"',
							},
							{
								type: "literal",
								value: '"tertiary"',
							},
							{
								type: "literal",
								value: '"tertiary-neutral"',
							},
							{
								type: "literal",
								value: '"danger"',
							},
						],
					},
				},
			],
			slots: [
				{
					description: "Content of the button",
					lets: [],
					name: "children",
					optional: true,
					snippet: true,
				},
				{
					description: "Place icon to the left of the content",
					lets: [],
					name: "iconLeft",
					optional: true,
					snippet: true,
				},
				{
					description: "Place icon to the right of the content",
					lets: [],
					name: "iconRight",
					optional: true,
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
