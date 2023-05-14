import type { StorybookConfig } from "@storybook/sveltekit";
const config: StorybookConfig = {
	stories: [
		"../src/stories/pages/Docs.mdx",
		"../src/stories/pages/CSS.mdx",
		"../src/stories/pages/Icons.mdx",
		"../src/stories/*.mdx",
		"../src/**/*.stories.@(js|jsx|ts|tsx|svelte|mdx)",
	],
	addons: [
		"@storybook/addon-links",
		"@storybook/addon-essentials",
		"@storybook/addon-interactions",
		"@storybook/addon-svelte-csf",
		"@storybook/addon-a11y",
	],
	framework: {
		name: "@storybook/sveltekit",
		options: {},
	},
	docs: {
		autodocs: true,
	},
	core: {
		disableTelemetry: true,
	},
	typescript: {
		check: true,
		skipBabel: true,
	},
};
export default config;
