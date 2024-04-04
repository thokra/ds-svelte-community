import docPlugin from "@nais/vite-plugin-svelte-docs";
import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig, type PluginOption } from "vite";

export default defineConfig({
	assetsInclude: ["/sb-preview/runtime.js"],

	plugins: [docPlugin(require.resolve("svelte2tsx")) as PluginOption, sveltekit() as PluginOption],
});
