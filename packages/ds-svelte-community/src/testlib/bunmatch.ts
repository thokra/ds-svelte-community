import type { RenderResult } from "@testing-library/svelte";
import type { SvelteComponent } from "svelte";
import { toMimicReact, type Options, type ReactComponent } from "./htmldiff";

export async function bunmatch<T extends SvelteComponent>(
	svelte: RenderResult<T>,
	react: ReactComponent,
	options?: Options,
): Promise<boolean> {
	const t = await toMimicReact(svelte, react, options);
	if (!t.pass) {
		console.log(t.message() + "\n");
	}
	return t.pass;
}
