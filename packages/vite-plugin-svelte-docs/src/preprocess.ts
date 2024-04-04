import type { Plugin as VitePlugin } from "vite";
import { Generator } from "./generator.js";

// export function sveltePreprocessSvg(): Pick<PreprocessorGroup, "script"> {
// 	return {
// 		script: ({ filename, content }) => {
// 			// Only process if filename ends with ?doc
// 			if (filename?.endsWith("?doc")) {
// 				const js = docFor(filename, content);
// 				return { code: `export default ${JSON.stringify(js, undefined, 2)}`, map: null };
// 			}
// 		},
// 	};
// }

export default function myPlugin(svelte2tsxPath: string): VitePlugin {
	const gen = new Generator(svelte2tsxPath);

	return {
		name: "dssc-docs",

		async transform(code, id) {
			if (id.endsWith(".svelte?doc")) {
				const filename = id.replace(/\?doc$/, "");

				const source = Bun.file(filename);
				gen.addSvelteFile(filename, await source.text());

				const js = gen.docFor(filename);
				console.log("GENERATED", `export default ${JSON.stringify(js, undefined, 2)}`);
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
