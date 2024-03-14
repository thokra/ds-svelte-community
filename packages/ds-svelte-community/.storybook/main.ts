import type { StorybookConfig } from "@storybook/sveltekit";

const config: StorybookConfig = {
	stories: ["../src/stories/**/*.mdx", "../src/**/*.@(mdx|stories.@(ts|svelte))"],
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
	},
	async viteFinal(config) {
		config.define = { "process.env.FORCE_SIMILAR_INSTEAD_OF_MAP": "false" };
		// as a bonus you can also add storybook specific aliases here:
		return config;
	},
};
export default config;
