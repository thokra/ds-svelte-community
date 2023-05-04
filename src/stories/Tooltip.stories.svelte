<script lang="ts">
	import { Meta, Story, Template } from "@storybook/addon-svelte-csf";

	import Button from "$lib/components/Button.svelte";
	import Tooltip from "$lib/components/Tooltip.svelte";
	import PrinterSmall from "$lib/icons/PrinterSmall.svelte";
</script>

<Meta
	title="ds-svelte/Tooltip"
	component={Tooltip}
	argTypes={{
		placement: {
			control: "select",
			options: ["top", "bottom", "left", "right"],
		},
		content: {
			control: "text",
			type: "string",
		},
	}}
	args={{
		content: "Tooltip content",
	}}
/>

<Template let:args>
	<div class="wrapper">
		<Tooltip {...args}>
			<Button>
				<svelte:fragment slot="icon-left"><PrinterSmall aria-label="Print" /></svelte:fragment>
			</Button>
		</Tooltip>
	</div>
</Template>

<Story name="Default" />

<style>
	.wrapper {
		display: flex;
		justify-content: center;
		align-items: center;
		min-height: 200px;
	}
</style>
