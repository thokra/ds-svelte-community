<script lang="ts">
	// eslint-disable-next-line
	// @ts-ignore
	import { Meta, Story, Template } from "@storybook/addon-svelte-csf";

	import Popover from "$lib/components/Popover/Popover.svelte";
	import { PopoverPlacement } from "$lib/components/Popover/type";
	import PopoverDot from "./examples/PopoverDot.svelte";
</script>

<Meta title="components/Popover" component={Popover} />

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
