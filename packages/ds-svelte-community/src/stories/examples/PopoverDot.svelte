<script lang="ts">
	import { Button } from "$lib";
	import Popover from "$lib/components/Popover/Popover.svelte";
	import type { PopoverPlacement } from "$lib/components/Popover/type";

	export let placement: (typeof PopoverPlacement)[number];

	let el: HTMLButtonElement | null = null;
	let open = false;
</script>

<Button
	size="small"
	variant={placement.indexOf("-") >= 0 ? "secondary" : "primary"}
	bind:ref={el}
	on:click={() => (open = !open)}>○</Button
>
<Popover anchorEl={el} bind:open {placement}>
	{placement}
</Popover>
