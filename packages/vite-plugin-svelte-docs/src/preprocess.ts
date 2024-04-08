import fs from "fs";
import type { Plugin as VitePlugin } from "vite";
import { Generator } from "./generator.js";

export default function myPlugin(svelte2tsxPath: string): VitePlugin {
	return {
		name: "dssc-docs",

		async transform(_code, id) {
			if (id.endsWith(".svelte?doc")) {
				const gen = new Generator(svelte2tsxPath);
				const filename = id.replace(/\?doc$/, "");

				// const source = Bun.file(filename);
				const source = await fs.promises.readFile(filename);
				gen.addSvelteFile(filename, source.toString("utf-8"));

				const js = gen.docFor(filename);
				return {
					code: `export default ${JSON.stringify(js, undefined, 2)}`,
					meta: {
						vite: {
							lang: "json",
						},
					},
				};
			}
		},
	};
}
