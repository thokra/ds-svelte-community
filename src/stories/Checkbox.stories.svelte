<script>
	import { Checkbox } from "$lib";
	import { Meta, Story, Template } from "@storybook/addon-svelte-csf";

	let child1 = false;
	let child2 = false;
</script>

<Meta
	title="ds-svelte/Checkbox"
	component={Checkbox}
	parameters={{
		docs: {
			description: {
				component: `
We use Checkbox and CheckboxGroup when users need to be able to select multiple options.


Read more about this component in the [Aksel documentation](https://aksel.nav.no/komponenter/core/checkbox).

`,
			},
		},
	}}
	argTypes={{
		error: {
			control: "boolean",
			description: "Adds error indication on checkbox",
		},
		hideLabel: {
			control: "boolean",
			description: "Hides label and makes it viewable for screen-readers only.",
		},
		value: {
			control: "text",
			type: { name: "string", required: true },
			description: "The value of the checkbox",
			table: {
				type: { summary: "string" },
			},
		},
		indeterminate: {
			control: "boolean",
			description: "Specify whether the Checkbox is in an indeterminate state",
		},
		description: {
			control: "text",
			description: "Adds a description to extend labeling of Checkbox",
		},
		size: {
			control: "select",
			options: ["small", "medium"],
			description: "Changes font-size, padding and gaps",
			table: {
				type: { summary: "medium | small" },
				defaultValue: { summary: "medium" },
			},
		},
		disabled: {
			control: "boolean",
			description: "Disables element Avoid using if possible for accessibility purposes",
		},
		id: {
			control: "text",
			description: "Override internal id",
			table: {
				type: { summary: "string" },
				defaultValue: { summary: "cb-[calculated]" },
			},
		},
		checked: { control: "boolean" },
	}}
	args={{
		value: "some_value",
	}}
/>

<Template let:args>
	<Checkbox {...args}>Are you sure?</Checkbox>
</Template>

<Story name="Default" />

<Story name="Indeterminate">
	<Checkbox
		value="parent"
		indeterminate={child1 != child2}
		checked={child1 && child2}
		on:change={(e) => {
			child1 = child2 = e.detail.currentTarget.checked;
		}}
	>
		Parent
	</Checkbox>
	<div class="children">
		<Checkbox value="1" bind:checked={child1}>Child 1</Checkbox>
		<Checkbox value="2" bind:checked={child2}>Child 2</Checkbox>
	</div>
</Story>

<style>
	.children {
		margin-left: 2rem;
	}
</style>
