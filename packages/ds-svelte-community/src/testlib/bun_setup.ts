import { GlobalRegistrator } from "@happy-dom/global-registrator";
import { plugin, type OnLoadCallback } from "bun";
import { transformWithEsbuild } from "vite";

const oldConsole = console;
GlobalRegistrator.register();
window.console = oldConsole;

await plugin({
	name: "svelte loader",
	async setup(builder) {
		const { compile, compileModule } = await import("svelte/compiler");
		const { readFileSync } = await import("fs");

		const renderSvelte: OnLoadCallback = async ({ path }) => {
			const before = readFileSync(path, "utf8");
			try {
				return {
					// Use the preprocessor of your choice.
					contents: compile(before, {
						warningFilter: () => {
							return true;
						},
					}).js.code,
					loader: "js",
				};
			} catch (e) {
				console.log("Error in svelte loader", path);
				throw e;
			}
		};

		const renderSvelteTS: OnLoadCallback = async ({ path }) => {
			let contents: string;
			// We need to strip out typescript types from .svelte.ts files
			const { code } = await transformWithEsbuild(readFileSync(path, "utf8"), path, {
				loader: "ts",
				target: "esnext",
				tsconfigRaw: {
					compilerOptions: {
						// svelte typescript needs this flag to work with type imports
						importsNotUsedAsValues: "preserve",
						preserveValueImports: true,
					},
				},
			});

			const content = code;
			try {
				contents = compileModule(content, {
					filename: path,
					dev: true,
					generate: "client",
				}).js.code;
			} catch (e) {
				console.log("Error in svelte ts loader", path);
				// console.log(content);
				throw e;
			}
			try {
				return {
					contents,
					loader: "js",
				};
			} catch (e) {
				console.log("Error in svelte ts loader", path);
				throw e;
			}
		};

		builder.onLoad({ filter: /\.svelte$/ }, renderSvelte);
		builder.onLoad({ filter: /\.svelte.js$/ }, renderSvelteTS);
		builder.onLoad({ filter: /\.svelte.ts$/ }, renderSvelteTS);
	},
});
