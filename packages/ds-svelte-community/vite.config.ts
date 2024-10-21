import docPlugin from "@nais/vite-plugin-svelte-docs";
import { sveltekit } from "@sveltejs/kit/vite";
import path from "path";
import { defineConfig } from "vite";
import storyProcess from "./src/doclib/preprocessor";

export default defineConfig({
	plugins: [
		storyProcess(),
		sveltekit(),
		docPlugin(path.resolve("..", "..", "node_modules", "svelte2tsx", "index.js")),
	],
});
