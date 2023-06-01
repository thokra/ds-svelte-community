<script>
	import { Select } from "$lib/components/Select";
	import { sizes } from "$lib/components/Select/type";
	import { Meta, Story, Template } from "@storybook/addon-svelte-csf";
	import source from "./examples/Select.svelte?raw";

	let selected = "";

	$: error = selected ? null : "Please choose a country";
</script>

<Meta
	title="components/Select"
	component={Select}
	argTypes={{
		htmlSize: {
			control: "number",
			description: "Exposes the HTML size attribute",
			table: { type: { summary: "number" } },
		},
		label: { description: "Label for select" },
		hideLabel: {
			description: "Hides label and description for screen readers only.",
		},
		style: {
			description: "Sets inline-style on select wrapper.",
		},
		size: {
			control: "select",
			options: sizes,
			description: "Changes font-size, padding and gaps.",
		},
		disabled: {
			description:
				"Disables element.\n\n**Note:** Avoid using if possible for accessibility purposes.",
		},
		error: { description: "Error message for element" },
		value: { description: "Selected value" },
	}}
/>

<Template let:args>
	<div class="example">
		<Select {...args} label="Which country do you reside in?">
			<option value="">Choose country</option>
			<option value="norway">Norway</option>
			<option value="sweden">Sweden</option>
			<option value="denmark">Denmark</option>
		</Select>
	</div>
</Template>

<Story name="Default" {source} />

<Story name="Small" args={{ size: "small" }} />

<Story name="Description">
	<div class="example">
		<Select label="Which country do you reside in?">
			<div slot="description">Choose the country you spend most of your time in.</div>
			<option value="">Choose country</option>
			<option value="norway">Norway</option>
			<option value="sweden">Sweden</option>
			<option value="denmark">Denmark</option>
		</Select>
	</div>
</Story>

<Story name="Error">
	<div class="example">
		<Select bind:value={selected} error="No country chosen" label="Which country do you reside in?">
			<option value="">Choose country</option>
			<option value="norway">Norway</option>
			<option value="sweden">Sweden</option>
			<option value="denmark">Denmark</option>
		</Select>
	</div>
</Story>

<Story name="Hide label" args={{ hideLabel: true }} />

<Story name="Disabled" args={{ disabled: true }} />

<style>
	.example {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>
