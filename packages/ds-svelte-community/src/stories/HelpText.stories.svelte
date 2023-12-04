<script lang="ts" context="module">
	import HelpText from "$lib/components/HelpText/HelpText.svelte";
	import { PopoverPlacement } from "$lib/components/Popover/type";
	import type { MetaProps } from "@storybook/addon-svelte-csf";
	import source from "./examples/HelpText.svelte?raw";

	export const meta: MetaProps = {
		title: "components/HelpText",
		component: { HelpText },
		argTypes: {
			title: {
				description: "Adds a title-tooltip with the given text",
				type: {
					name: "string",
					required: true,
				},
			},
			placement: {
				control: "select",
				options: PopoverPlacement,
				description: "Placement of the HelpText.",

				table: {
					type: { summary: PopoverPlacement.join(" | ") },
					defaultValue: { summary: "top" },
				},
			},
			strategy: {
				description:
					"Changes what CSS position property to use. You want to use 'fixed' if reference element is inside a fixed container, but HelpText is not",
				control: "select",
				options: ["absolute", "fixed"],

				table: {
					defaultValue: { summary: "absolute" },
				},
			},
			wrapperClass: {
				description: "Adds a class to the wrapper element",
				control: "text",
			},
		},
	};
</script>

<script lang="ts">
	import { Story, Template } from "@storybook/addon-svelte-csf";
</script>

<Template let:args>
	<div class="example">
		<HelpText {...args}>Extended description</HelpText>
	</div>
</Template>

<Story name="Default" {source} args={{ title: "Some title" }} />

<style>
	.example {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100px;
	}
</style>
