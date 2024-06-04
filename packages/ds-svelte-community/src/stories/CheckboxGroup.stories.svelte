<script>
	import { Checkbox, CheckboxGroup } from "$lib/components/Checkbox";
	import { sizes } from "$lib/components/Checkbox/type.svelte";
	// eslint-disable-next-line
	// @ts-ignore
	import { Meta, Story, Template } from "@storybook/addon-svelte-csf";
	import source from "./examples/CheckboxGroup.svelte?raw";

	let groupControlValue = ["1"];
</script>

<Meta
	title="components/CheckboxGroup"
	component={CheckboxGroup}
	argTypes={{
		error: {
			description: "Error message for element.",
		},
		errorId: {
			description: "Override internal errorId.",
		},
		hideLegend: {
			description: "If enabled shows the legend and description for screen readers only.",
		},
		value: {
			control: "object",
			type: { name: "array", value: { name: "string" }, required: true },

			description: "Controlled state for checkboxes.",
			table: {
				type: { summary: "array" },
			},
		},
		description: {
			control: "text",
			description: "Description of the fieldset.",
		},
		size: {
			control: "select",
			options: sizes,
			description: "Changes font-size, padding and gaps.",
			table: {
				type: { summary: sizes.join(" | ") },
				defaultValue: { summary: "medium" },
			},
		},
		disabled: {
			description: "Disables element. Avoid using if possible for accessibility purposes.",
		},
		id: {
			control: "text",
			description: "Override internal id.",
			table: {
				type: { summary: "string" },
				defaultValue: { summary: "cbg-[calculated]" },
			},
		},
		legend: {
			description: "Legend of the fieldset.",
		},
	}}
	args={{
		value: ["2"],
	}}
/>

<Template let:args>
	<CheckboxGroup {...args}>
		<svelte:fragment slot="legend">Checkbox group</svelte:fragment>
		<Checkbox value="1">Checkbox 1</Checkbox>
		<Checkbox value="2">Checkbox 2</Checkbox>
		<Checkbox value="3">Checkbox 3</Checkbox>
	</CheckboxGroup>
</Template>

<Story name="Default" {source} />

<Story name="Group control">
	<CheckboxGroup bind:value={groupControlValue}>
		<svelte:fragment slot="legend">Checkbox group</svelte:fragment>
		<Checkbox value="1">Checkbox 1</Checkbox>
		<Checkbox value="2">Checkbox 2</Checkbox>
		<Checkbox value="3">Checkbox 3</Checkbox>
	</CheckboxGroup>

	<p>
		Selected: {JSON.stringify(groupControlValue)}
	</p>
</Story>

<Story name="Error" args={{ error: "Group error message" }} />
<Story name="Small" args={{ size: "small" }} />

<Story name="Description">
	<CheckboxGroup>
		<svelte:fragment slot="legend">Checkbox group</svelte:fragment>
		<svelte:fragment slot="description">Group description</svelte:fragment>
		<Checkbox value="1">Checkbox 1</Checkbox>
		<Checkbox value="2">Checkbox 2</Checkbox>
		<Checkbox value="3">Checkbox 3</Checkbox>
	</CheckboxGroup>
</Story>
