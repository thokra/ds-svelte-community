import { describe, expect, test } from "bun:test";
import * as fs from "fs/promises";
import * as path from "path";
import { Generator } from "../../src/generator";

describe("v4", () => {
	test("button", async () => {
		const filename = path.resolve(import.meta.dir, "Button.svelte").replace(".svelte", ".ts");
		const code = (await fs.readFile(filename.replace(".ts", ".svelte"))).toString();

		const gen = new Generator(require.resolve("svelte2tsx"));
		gen.addSvelteFile(filename, code);
		const doc = gen.docFor(filename, false);

		expect(doc).toEqual({
			name: "Button",
			description:
				'Here\'s some documentation for this component.\nIt will show up on hover.\n\n- You can use markdown here.\n- You can also use code blocks here.\n- Usage:\n```tsx\n<Button name="Arethra">\n```',
			props: [
				{
					description: "",
					name: "disabled",
					default: "false",
					optional: true,
					type: {
						type: "union",
						values: [
							{
								type: "boolean",
							},
							{
								type: "undefined",
							},
							{
								type: "literal",
								value: "null",
							},
						],
					},
				},
				{
					description: "",
					default: "false",
					name: "iconOnly",
					optional: true,
					type: {
						type: "boolean",
					},
				},
				{
					description: "",
					default: "false",
					name: "loading",
					optional: true,
					type: {
						type: "boolean",
					},
				},
				{
					description: "Reference",
					default: "null",
					name: "ref",
					optional: true,
					type: {
						type: "union",
						values: [
							{
								type: "literal",
								value: "null",
							},
							{
								name: "HTMLButtonElement",
								type: "interface",
							},
							{
								name: "HTMLAnchorElement",
								type: "interface",
							},
						],
					},
				},
				{
					description: "",
					default: '"medium"',
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
					description: "",
					default: '"primary"',
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
					description: "",
					lets: [],
					name: "default",
					optional: true,
				},
				{
					description: "",
					lets: [],
					name: "icon-left",
					optional: true,
				},
				{
					description: "",
					lets: [],
					name: "icon-right",
					optional: true,
				},
			],
			events: [
				{
					description: "",
					name: "click",
					optional: true,
				},
				{
					description: "",
					name: "mouseenter",
					optional: true,
				},
				{
					description: "",
					name: "mouseleave",
					optional: true,
				},
			],
		});
	});
});
