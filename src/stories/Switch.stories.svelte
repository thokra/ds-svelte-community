<script>
	import { Switch } from "$lib/components/Switch";
	import { Meta, Story, Template } from "@storybook/addon-svelte-csf";
	import source from "./examples/Switch.svelte?raw";
</script>

<Meta
	title="components/Switch"
	component={Switch}
	argTypes={{
		hideLabel: {
			control: "boolean",
			description: "If enabled shows the label and description for screenreaders only.",
		},
		loading: {
			control: "boolean",
			description: "Toggles loading state with loader-component on switch.",
		},
		position: {
			control: "select",
			options: ["left", "right"],
			description: "Positions switch on left/right side of label.",
		},
		description: {
			control: "text",
			description: "Adds a description to extend labling of Switch.",
		},
		size: {
			control: "select",
			options: ["medium", "small"],
			description: "Changes font-size, padding and gaps.",
		},
		disabled: {
			control: "boolean",
			description:
				"Disables element.\n\n*Note: Avoid using if possible for accessibility purposes.*",
		},
		checked: {
			control: "boolean",
			description: "Checked state.",
		},
	}}
/>

<Template let:args>
	<Switch {...args}>Label</Switch>
</Template>

<Story name="Default" {source} />

<Story name="Hide label" args={{ hideLabel: true }} />

<Story name="Loading" args={{ loading: true }} />

<Story name="Disabled" args={{ disabled: true }} />

<Story name="Checked" args={{ checked: true }} />

<Story name="Description">
	<div class="description">
		<Switch description="Position left">Label</Switch>
		<Switch description="Position right" position="right">Label</Switch>
	</div>
</Story>

<style>
	.description {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		align-items: center;
	}
</style>
