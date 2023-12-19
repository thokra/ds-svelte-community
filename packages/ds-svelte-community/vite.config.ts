import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig, type PluginOption } from "vite";

export default defineConfig({
	assetsInclude: ["/sb-preview/runtime.js"],

	plugins: [sveltekit() as PluginOption],
});
