import { GlobalRegistrator } from "@happy-dom/global-registrator";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import { plugin } from "bun";

const oldConsole = console;
GlobalRegistrator.register();
window.console = oldConsole;

await plugin({
	name: "svelte loader",
	async setup(builder) {
		const { compile, preprocess } = await import("svelte/compiler");
		const { readFileSync } = await import("fs");

		builder.onLoad({ filter: /\.svelte$/ }, async ({ path }) => {
			return {
				// Use the preprocessor of your choice.
				contents: compile(
					await preprocess(readFileSync(path, "utf8"), vitePreprocess()).then(
						(processed) => processed.code,
					),
					{
						filename: path,
						generate: "dom",
					},
				).js.code,
				loader: "js",
			};
		});
	},
});
