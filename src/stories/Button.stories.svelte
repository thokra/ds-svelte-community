<script lang="ts">
	import Button from "$lib/components/Button/Button.svelte";
	import { sizes, variants } from "$lib/components/Button/type";
	import { Star } from "$lib/icons";
	import { action } from "@storybook/addon-actions";
	import { Meta, Story, Template } from "@storybook/addon-svelte-csf";
	import source from "./examples/Button.svelte?raw";
</script>

<Meta
	title="components/Button"
	component={Button}
	argTypes={{
		variant: {
			control: "select",
			options: variants,

			description: "Changes design and interaction-visuals",
			table: {
				type: { summary: variants.join(" | ") },
				defaultValue: { summary: "primary" },
			},
		},
		size: {
			control: "select",
			options: sizes,

			description: "Changes font-size, padding and gaps",
			table: {
				type: { summary: sizes.join(" | ") },
				defaultValue: { summary: "medium" },
			},
		},
		disabled: {
			description: "Disables element. Avoid using if possible for accessibility purposes",
		},
		loading: {
			description: "Replaces button content with a Loader component, keeps width",
		},

		as: {
			control: "select",
			options: ["button", "a"],

			description: "Tag to use for the button",
		},

		iconOnly: {
			description: "Icon only",
		},
	}}
/>

<Template let:args>
	<Button
		{...args}
		on:click={action("Button clicked")}
		on:mouseenter={action("Mouse entered button")}
		on:mouseleave={action("Mouse left button")}>Button text</Button
	>
</Template>

<Story name="Default" {source} />

<Story name="Small" args={{ size: "small" }} />

<Story name="Link" args={{ as: "a", href: "#thecakeisalie" }} />

<Story name="Loading" args={{ loading: true }} />

<Story name="Disabled" args={{ disabled: true }} />

<Story name="Icon" args={{ variant: "secondary" }} let:args>
	<Button
		{...args}
		on:click={action("Button clicked")}
		on:mouseenter={action("Mouse entered button")}
		on:mouseleave={action("Mouse left button")}
	>
		<Star slot="icon-left" aria-label="Stjerne" />
	</Button>
</Story>

<Story name="Icon W text" args={{ variant: "danger" }} let:args>
	<Button
		{...args}
		on:click={action("Button clicked")}
		on:mouseenter={action("Mouse entered button")}
		on:mouseleave={action("Mouse left button")}
	>
		<Star slot="icon-left" aria-label="Stjerne" />
		Button text
	</Button>
</Story>
