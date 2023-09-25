<script>
	// eslint-disable-next-line
	// @ts-ignore
	import { Meta, Story, Template } from "@storybook/addon-svelte-csf";

	import Loader from "$lib/components/Loader/Loader.svelte";
	import { sizes, variants } from "$lib/components/Loader/type";
	import source from "./examples/Loader.svelte?raw";
</script>

<Meta
	title="components/Loader"
	component={Loader}
	argTypes={{
		size: {
			control: "select",
			options: sizes,
			description: "Changes Loader width/height. `64px | 40px | 32px | 24px | 20px | 16px`",
		},
		variant: {
			control: "select",
			options: variants,
			description: "Colored variants for Loader",
		},
		title: {
			description: "Title prop on svg",
		},
		transparent: {
			description: "Sets svg-background to transparent",
		},
	}}
/>

<Template let:args>
	<Loader {...args} />
</Template>

<Story name="Default" {source} />
