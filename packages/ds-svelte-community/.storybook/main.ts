import type { StorybookConfig } from "@storybook/sveltekit";

const config: StorybookConfig = {
	stories: ["../src/stories/**/*.mdx", "../src/**/*.stories.@(ts|svelte|mdx)"],
	addons: [
		"@storybook/addon-links",
		"@storybook/addon-essentials",
		"@storybook/addon-interactions",
		"@storybook/addon-a11y",
		"@storybook/addon-svelte-csf",
	],
	framework: "@storybook/sveltekit",
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
