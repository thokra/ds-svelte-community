import { GlobalRegistrator } from "@happy-dom/global-registrator";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import { plugin, type OnLoadCallback } from "bun";

const oldConsole = console;
GlobalRegistrator.register();
window.console = oldConsole;

await plugin({
	name: "svelte loader",
	async setup(builder) {
		const { compile, compileModule, preprocess } = await import("svelte/compiler");
		const { readFileSync } = await import("fs");

		const renderSvelte: OnLoadCallback = async ({ path }) => {
			try {
				return {
					// Use the preprocessor of your choice.
					contents: compile(
						await preprocess(readFileSync(path, "utf8"), vitePreprocess()).then(
							(processed) => processed.code,
						),
						{
							filename: path,
							generate: "client",
							runes: true,
						},
					).js.code,
					loader: "js",
				};
			} catch (e) {
				console.log("Error in svelte loader", path);
				throw e;
			}
		};

		const renderSvelteTS: OnLoadCallback = async ({ path }) => {
			const contents = compileModule(
				await preprocess(readFileSync(path, "utf8"), vitePreprocess()).then(
					(processed) => processed.code,
				),
				{
					filename: path,
					generate: "client",
				},
			).js.code.replaceAll(
				'import * as Svelte from "svelte"',
				`import * as Svelte from "svelte" with { type: "browser" }`,
			);

			console.log(contents);

			try {
				return {
					// Use the preprocessor of your choice.
					contents,
					loader: "js",
				};
			} catch (e) {
				console.log("Error in svelte loader", path);
				throw e;
			}
		};

		builder.onLoad({ filter: /\.svelte$/ }, renderSvelte);
		builder.onLoad({ filter: /\.svelte.js$/ }, renderSvelteTS);
		builder.onLoad({ filter: /\.svelte.ts$/ }, renderSvelteTS);
	},
});
