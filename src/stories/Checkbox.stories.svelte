<script>
	import { Checkbox } from "$lib/components/Checkbox";
	import { Meta, Story, Template } from "@storybook/addon-svelte-csf";

	let child1 = false;
	let child2 = false;
</script>

<Meta title="ds-svelte/Checkbox" component={Checkbox} />

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
