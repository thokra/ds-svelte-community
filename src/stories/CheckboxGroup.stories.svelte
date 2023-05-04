<script>
	import { CheckboxGroup, Checkbox } from "$lib/components/Checkbox";
	import { Meta, Story, Template } from "@storybook/addon-svelte-csf";

	let groupControlValue = ["1"];
</script>

<Meta title="ds-svelte/CheckboxGroup" component={CheckboxGroup} />

<Template let:args>
	<CheckboxGroup {...args}>
		<svelte:fragment slot="legend">Checkbox group</svelte:fragment>
		<Checkbox value="1">Checkbox 1</Checkbox>
		<Checkbox value="2">Checkbox 2</Checkbox>
		<Checkbox value="3">Checkbox 3</Checkbox>
	</CheckboxGroup>
</Template>

<Story name="Default" />

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
