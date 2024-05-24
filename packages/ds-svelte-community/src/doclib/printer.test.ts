import { describe, expect, it } from "bun:test";
import { removeAttrs } from "./printer";

describe("print_ast", () => {
	it("with attrs to remove", async () => {
		const code = `<Button something="asdf" onclick={() => {count++}} other="asdf">
		Text
		</Button>`;

		const ret = await removeAttrs(code, ["something", "other"]);

		expect(ret).toEqual(`<Button
	onclick={() => {
		count++;
	}}
	{docProps}
>
	Text
</Button>
`);
	});

	it("with attrs to remove and no other attrs", async () => {
		const code = `<Button something="asdf">
		Text
		</Button>`;

		const ret = await removeAttrs(code, ["something"]);

		expect(ret).toEqual(`<Button {docProps}>Text</Button>\n`);
	});

	it("with no attrs to remove", async () => {
		const code = `<Button something="asdf">
		Text
		</Button>`;

		const ret = await removeAttrs(code, []);

		expect(ret).toEqual(`<Button something="asdf" {docProps}>Text</Button>\n`);
	});
});
