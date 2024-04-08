import { Generator, type Doc } from "@nais/vite-plugin-svelte-docs";
import { glob } from "glob";
import path from "path";
import type { PageServerLoad } from "./$types";

const lib = path.resolve("src/lib/components");

export const load = (async ({ params }) => {
	console.log("lib", lib, params.component);
	// const glob = new Bun.Glob(path.join("**", params.component + ".svelte"));
	// const list = glob.scan(lib);

	const files = await glob(path.join(lib, "**", params.component + ".svelte"));
	// const files: string[] = [];
	// for await (const file of list) {
	// 	files.push(path.join(lib, file));
	// }

	if (files.length === 0) {
		throw new Error("Component not found");
	}

	if (files.length > 1) {
		throw new Error("Multiple components found");
	}

	// const doc = await import(/* @vite-ignore */ files[0] + "?doc");

	const gen = new Generator(path.resolve("node_modules/svelte2tsx/index.js"));

	const code = await Bun.file(files[0]).text();
	gen.addSvelteFile(files[0], code);
	const doc = gen.docFor(files[0]);

	return {
		component: params.component,
		doc: doc as Doc,
	};
}) satisfies PageServerLoad;
