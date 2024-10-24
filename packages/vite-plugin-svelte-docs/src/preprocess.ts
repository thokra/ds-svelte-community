import fs from "fs";
import type { Plugin as VitePlugin } from "vite";
import { Generator } from "./generator.js";

export default function docProcess(svelte2tsxPath: string): VitePlugin {
	return {
		name: "dssc-docs",

		async transform(_code, id) {
			if (id.endsWith(".svelte?doc")) {
				const gen = new Generator(svelte2tsxPath);
				await gen.setup();
				const filename = id.replace(/\?doc$/, "");

				// const source = Bun.file(filename);
				const source = await fs.promises.readFile(filename);
				gen.addSvelteFile(filename, source.toString("utf-8"));

				const { doc, files } = gen.docFor(filename);

				this.addWatchFile(filename);
				files.forEach((file) => {
					this.addWatchFile(file);
				});

				return {
					code: `export default ${JSON.stringify(doc, undefined, 2)}`,
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
