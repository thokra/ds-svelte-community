<script lang="ts">
	import { Meta, Story, Template } from "@storybook/addon-svelte-csf";

	import Button from "$lib/components/Button.svelte";
	import { Star } from "$lib/icons";

	const variants = [
		"primary",
		"primary-neutral",
		"secondary",
		"secondary-neutral",
		"tertiary",
		"tertiary-neutral",
		"danger",
	];
</script>

<Meta
	title="ds-svelte/Button"
	component={Button}
	argTypes={{
		variant: {
			control: "select",
			options: variants,
		},
		size: {
			control: "select",
			options: ["medium", "small", "xsmall"],
		},
		disabled: { control: "boolean" },
		loading: { control: "boolean" },
		as: {
			control: "select",
			options: ["button", "a"],
		},
	}}
/>

<Template let:args>
	<Button {...args}>Button text</Button>
</Template>

<Story name="Default" />

<Story name="Small" args={{ size: "small" }} />

<Story name="Link" args={{ as: "a", href: "#thecakeisalie" }} />

<Story name="Loading" args={{ loading: true }} />

<Story name="Disabled" args={{ disabled: true }} />

<Story name="Icon" args={{ variant: "secondary" }} let:args>
	<Button {...args}>
		<Star slot="icon-left" aria-label="Stjerne" />
	</Button>
</Story>

<Story name="Icon W text" args={{ variant: "danger" }} let:args>
	<Button {...args}>
		<Star slot="icon-left" aria-label="Stjerne" />
		Button text
	</Button>
</Story>
