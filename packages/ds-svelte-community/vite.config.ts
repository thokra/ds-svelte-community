import docPlugin from "@nais/vite-plugin-svelte-docs";
import { sveltekit } from "@sveltejs/kit/vite";
import path from "path";
import { defineConfig, type PluginOption } from "vite";

export default defineConfig({
	assetsInclude: ["/sb-preview/runtime.js"],

	plugins: [
		docPlugin(path.resolve("..", "..", "node_modules", "svelte2tsx", "index.js")) as PluginOption,
		sveltekit() as PluginOption,
	],
});
