import docPlugin from "@nais/vite-plugin-svelte-docs";
import { sveltekit } from "@sveltejs/kit/vite";
import { svelteTesting } from "@testing-library/svelte/vite";
import path from "path";
import { defineConfig } from "vitest/config";
import storyProcess from "./src/doclib/preprocessor";

export default defineConfig({
	plugins: [
		storyProcess(),
		sveltekit(),
		svelteTesting(),
		docPlugin(path.resolve("..", "..", "node_modules", "svelte2tsx", "index.js")),
	],
	test: {
		environment: "happy-dom",
		setupFiles: ["./src/testlib/vitest_setup.ts"],
	},
});
