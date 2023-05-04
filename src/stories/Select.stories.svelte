<script>
	import { Select } from "$lib/components/Select";
	import { Meta, Story, Template } from "@storybook/addon-svelte-csf";

	let selected = "";

	$: error = selected ? null : "Please choose a country";
</script>

<Meta title="ds-svelte/Select" component={Select} />

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

<Story name="Default" />

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
