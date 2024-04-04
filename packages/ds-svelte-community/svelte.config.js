import { optimizeImports } from "@nais/ds-svelte-community-preprocess-svelte";
import adapter from "@sveltejs/adapter-static";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: [
		vitePreprocess(),
		optimizeImports({
			componentsImportPrefix: {
				match: "$lib",
				prefix: "$lib/",
			},
			iconImportPrefix: {
				match: "$lib/icons",
				prefix: "$lib/",
			},
		}),
	],

	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter(),
		alias: {
			$lib: "./src/lib",
			$testlib: "./src/testlib",
			$doclib: "./src/doclib",
		},
	},
};

export default config;
