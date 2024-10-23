import type { RenderResult } from "@testing-library/svelte";
import type { Component } from "svelte";
import { toMimicReact, type Options, type ReactComponent } from "./htmldiff";

export async function bunmatch<C extends Component>(
	svelte: RenderResult<C>,
	react: ReactComponent,
	options?: Options,
): Promise<boolean> {
	const t = await toMimicReact(svelte, react, options);
	if (!t.pass) {
		process.stderr.write(t.message() + "\n");
	}
	return t.pass;
}
