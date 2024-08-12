<script lang="ts">
	import { Button } from "$lib";
	import Popover from "$lib/components/Popover/Popover.svelte";
	import type { PopoverPlacement } from "$lib/components/Popover/type";

	let { placement }: { placement: (typeof PopoverPlacement)[number] } = $props();

	let el: Element | undefined = $state(undefined);
	let open = $state(false);
</script>

<Button
	size="small"
	variant={placement.indexOf("-") >= 0 ? "secondary" : "primary"}
	bind:ref={el}
	onclick={() => {
		open = !open;
	}}>○</Button
>
<Popover anchorEl={el} bind:open {placement}>
	{placement}
</Popover>
