<script lang="ts" context="module">
	import Popover from "$lib/components/Popover/Popover.svelte";
	import type { MetaProps } from "@storybook/addon-svelte-csf";

	export const meta: MetaProps = {
		title: "components/Popover",
		component: { Popover },
		argTypes: {
			open: {
				description: "Open state",
			},
			placement: {
				// control: "select",
				// options: PopoverPlacement,
				description: "Placement of the popover.",

				table: {
					type: { summary: PopoverPlacement.join(" | ") },
					defaultValue: { summary: "top" },
				},
			},
			anchorEl: {
				description: "Reference element",
			},
			arrow: {
				description: "Adds a arrow from dialog to anchor when true",

				table: {
					defaultValue: { summary: true },
				},
			},
			offset: {
				description: "Distance from anchor to popover",

				table: {
					defaultValue: { summary: "16 w/arrow, 4 w/no-arrow" },
				},
			},
			strategy: {
				description:
					"Changes what CSS position property to use. You want to use 'fixed' if reference element is inside a fixed container, but popover is not",

				table: {
					defaultValue: { summary: "absolute" },
				},
			},
			flip: {
				description: "Changes placement of the floating element in order to keep it in view.",

				table: {
					defaultValue: { summary: true },
				},
			},
		},
	};
</script>

<script lang="ts">
	// eslint-disable-next-line
	// @ts-ignore
	import { Story, Template } from "@storybook/addon-svelte-csf";

	import { PopoverPlacement } from "$lib/components/Popover/type";
	import PopoverDot from "./examples/PopoverDot.svelte";
</script>

<Template>
	<div class="wrapper">
		<div class="grid">
			{#each PopoverPlacement as placement}
				<div style:grid-area={placement}>
					<PopoverDot {placement} />
				</div>
			{/each}
		</div>
	</div>
</Template>

<Story name="Default" />

<style>
	.wrapper {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 300px;
	}

	.grid {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
		grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
		gap: 0.2rem;
		grid-auto-flow: row;
		grid-template-areas:
			". top-start top top-end ."
			"left-start . . . right-start"
			"left . . . right"
			"left-end . . . right-end"
			". bottom-start bottom bottom-end .";
	}
</style>
