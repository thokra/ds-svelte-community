import { optimizeImports } from "@nais/ds-svelte-community-preprocess-svelte";
import adapter from "@sveltejs/adapter-static";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import { mdsvex } from "mdsvex";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import { codeToHtml } from "shiki";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
let theme = "dark-plus";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	extensions: [".svelte", ".svx"],
	preprocess: [
		vitePreprocess(),
		mdsvex({
			layout: __dirname + "/src/routes/layout.svx.svelte",
			rehypePlugins: [
				rehypeSlug,
				[
					rehypeAutolinkHeadings,
					{
						behavior: "wrap",
						headingProperties: { className: "header-anchor" },
						properties: { className: "unstyled" },
					},
				],
			],
			highlight: {
				highlighter: async (code, lang) => {
					return await codeToHtml(code, {
						theme: theme,
						lang: lang,
						transformers: [
							{
								postprocess: (html) => {
									// Replace { with &#123; to prevent svelte from interpreting it as a binding
									return html.replaceAll("{", "&#123;");
								},
								pre: (node) => {
									node.properties["tabindex"] = "-1";
								},
							},
						],
					});
				},
			},
		}),
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
		adapter: adapter({
			strict: true,
			pages: "build",
			assets: "build",
		}),
		alias: {
			$lib: "./src/lib",
			$testlib: "./src/testlib",
			$doclib: "./src/doclib",
		},
		prerender: {
			handleMissingId: "ignore",
		},
	},
};

export default config;
