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
			description:
				'Here\'s some documentation for this component.\nIt will show up on hover.\n\n- You can use markdown here.\n- You can also use code blocks here.\n- Usage:\n```tsx\n<Button name="Arethra">\n```',
			props: [
				{
					name: "loading",
					type: {
						type: "boolean",
					},
					description: "",
					optional: true,
				},
				{
					name: "disabled",
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
					description: "",
					optional: true,
				},
				{
					name: "iconOnly",
					type: {
						type: "boolean",
					},
					description: "",
					optional: true,
				},
				{
					name: "size",
					type: {
						type: "union",
						values: [
							{
								type: "literal",
								value: "medium",
							},
							{
								type: "literal",
								value: "small",
							},
							{
								type: "literal",
								value: "xsmall",
							},
						],
					},
					description: "",
					optional: true,
				},
				{
					name: "variant",
					type: {
						type: "union",
						values: [
							{
								type: "literal",
								value: "primary",
							},
							{
								type: "literal",
								value: "primary-neutral",
							},
							{
								type: "literal",
								value: "secondary",
							},
							{
								type: "literal",
								value: "secondary-neutral",
							},
							{
								type: "literal",
								value: "tertiary",
							},
							{
								type: "literal",
								value: "tertiary-neutral",
							},
							{
								type: "literal",
								value: "danger",
							},
						],
					},
					description: "",
					optional: true,
				},
				{
					name: "ref",
					type: {
						type: "union",
						values: [
							{
								type: "literal",
								value: "null",
							},
							{
								type: "interface",
								name: "HTMLButtonElement",
							},
							{
								type: "interface",
								name: "HTMLAnchorElement",
							},
						],
					},
					description: "Reference",
					optional: true,
				},
			],
			slots: [
				{
					description: "",
					lets: [],
					name: "icon-left",
				},
				{
					description: "",
					lets: [],
					name: "default",
				},
				{
					description: "",
					lets: [],
					name: "icon-right",
				},
			],
			events: [
				{
					description: "",
					name: "click",
				},
				{
					description: "",
					name: "mouseenter",
				},
				{
					description: "",
					name: "mouseleave",
				},
			],
		});
	});
});
