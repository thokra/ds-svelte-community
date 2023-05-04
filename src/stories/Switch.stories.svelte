<script>
	import { Switch } from "$lib/components/Switch";
	import { Meta, Story, Template } from "@storybook/addon-svelte-csf";
</script>

<Meta title="ds-svelte/Switch" component={Switch} />

<Template let:args>
	<Switch {...args}>Label</Switch>
</Template>

<Story name="Default" />

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
