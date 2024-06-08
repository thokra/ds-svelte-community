<script lang="ts">
	import doc from "$lib/components/Popover/Popover.svelte?doc";

	import Doc from "$doclib/Doc.svelte";
	import Story from "$doclib/Story.svelte";
	import Alert from "$lib/components/Alert/Alert.svelte";
	import { PopoverPlacement } from "$lib/components/Popover/type";
	import Demo from "./Demo.svelte";
</script>

<Doc {doc}>
	{#snippet extraDescription()}
		<Alert variant="warning">
			Keyboard interaction is incomplete. Missing <kbd>esc</kbd> to close popover.
		</Alert>
	{/snippet}

	<Story locked>
		<div class="wrapper">
			<div class="grid">
				{#each PopoverPlacement as placement}
					<div style:grid-area={placement}>
						<Demo {placement} />
					</div>
				{/each}
			</div>
		</div>
	</Story>
</Doc>

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
