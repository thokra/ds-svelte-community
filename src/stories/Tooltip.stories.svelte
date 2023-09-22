<script lang="ts">
	// eslint-disable-next-line
	// @ts-ignore
	import { Meta, Story, Template } from "@storybook/addon-svelte-csf";

	import { Button, Tooltip } from "$lib";
	import { placements } from "$lib/components/Tooltip/type";
	import PrinterSmallIcon from "$lib/icons/PrinterSmallIcon.svelte";
</script>

<Meta
	title="components/Tooltip"
	component={Tooltip}
	argTypes={{
		open: {
			description: "Open state for tooltip.",
		},
		placement: {
			control: "select",
			options: placements,
			table: { type: { summary: placements.join(" | ") } },
			description: "Orientation for tooltip.",
		},
		arrow: {
			description: "Show arrow for tooltip.",
		},
		offset: {
			description: "Distance from anchor to tooltip.\n\nDefault 10px.",
		},
		content: {
			control: "text",
			description: "Text-content inside tooltip.",
			type: { name: "string", required: true },
		},
		maxChar: {
			description: "Sets max allowed character length.",
		},
		delay: {
			description: "Adds a delay in milliseconds before opening tooltip.",
		},
		keys: {
			description: "List of Keyboard-keys for shortcuts.",
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
				<svelte:fragment slot="icon-left"><PrinterSmallIcon aria-label="Print" /></svelte:fragment>
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
