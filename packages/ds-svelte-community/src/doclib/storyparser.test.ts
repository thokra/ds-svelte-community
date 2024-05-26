import { Glob } from "bun";
import { describe, expect, it } from "bun:test";
import * as Diff from "diff";
import path from "path";
import { format } from "./printer";
import { LogLevel, StoryParser } from "./storyparser";

describe("storyparser", async () => {
	const tests = new Glob(path.join(import.meta.dir, "testdata", "storyparser", "*.svelte")).scan();

	for await (const path of tests) {
		if (path.includes(".after.")) continue;

		const before = await Bun.file(path).text();
		const after = await Bun.file(path.replace(".svelte", ".after.svelte")).text();

		it(path, async () => {
			const parser = new StoryParser("@otherLib", LogLevel.all);
			let ret = await parser.parse(before, path);
			if (!ret) {
				throw new Error("No return value");
			}

			// Because we do not remove the imported Story, but it's no longer used, just remove the line from ret
			ret = ret.replace(/^\s+import Story from .+\n/gm, "");

			let addedOrRemoved = 0;
			const lines: string[] = [];

			const green = (input: string) => "\x1b[32m" + input + "\x1b[0m";
			const red = (input: string) => "\x1b[31m" + input + "\x1b[0m";
			Diff.diffLines(await format(ret), await format(after)).forEach((part) => {
				if (part.added) {
					addedOrRemoved++;
					lines.push(`${green("+")} ${green(part.value)}`);
				} else if (part.removed) {
					addedOrRemoved++;
					lines.push(`${red("+")} ${red(part.value)}`);
				} else {
					lines.push(`  ${part.value}`);
				}
			});

			if (addedOrRemoved > 0) {
				console.log(lines.join(""));
			}
			expect(addedOrRemoved).toBe(0);
		});
	}

	// 	it("with attrs to remove", async () => {
	// 		const code = `<Button something="asdf" onclick={() => {count++}} other="asdf">
	// 		Text
	// 		</Button>`;

	// 		const ret = await removeAttrs(code, ["something", "other"]);

	// 		expect(ret).toEqual(`<Button
	// 	onclick={() => {
	// 		count++;
	// 	}}
	// 	{docProps}
	// >
	// 	Text
	// </Button>
	// `);
	// 	});

	// 	it("with attrs to remove and no other attrs", async () => {
	// 		const code = `<Button something="asdf">
	// 		Text
	// 		</Button>`;

	// 		const ret = await removeAttrs(code, ["something"]);

	// 		expect(ret).toEqual(`<Button {docProps}>Text</Button>\n`);
	// 	});

	// 	it("with no attrs to remove", async () => {
	// 		const code = `<Button something="asdf">
	// 		Text
	// 		</Button>`;

	// 		const ret = await removeAttrs(code, []);

	// 		expect(ret).toEqual(`<Button something="asdf" {docProps}>Text</Button>\n`);
	// 	});
});
