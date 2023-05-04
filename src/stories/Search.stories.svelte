<script>
	import { Search } from "$lib/components/Search";
	import { Meta, Story, Template } from "@storybook/addon-svelte-csf";

	let value = "";
</script>

<Meta
	title="ds-svelte/Search"
	component={Search}
	argTypes={{
		hideLabel: { control: "boolean" },
		clearButton: { control: "boolean" },
		label: { control: "text" },
		clearButtonLabel: { control: "text" },
		size: { control: "select", options: ["medium", "small"] },
		variant: { control: "select", options: ["primary", "secondary", "simple"] },
		description: { control: "text" },
		value: { control: "text", description: "Bindable value of the input field" },
		disabled: { control: "boolean" },
	}}
	args={{
		label: "Search something",
	}}
/>

<Template let:args>
	<form on:submit|preventDefault>
		<Search {...args} bind:value />
	</form>
</Template>

<Story name="Default" />
