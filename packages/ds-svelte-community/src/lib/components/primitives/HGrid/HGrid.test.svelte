<script lang="ts">
	import HGrid from "./HGrid.svelte";
	import type { HGridProps } from "./type";

	let props: Omit<HGridProps, "children"> = $props();
</script>

<HGrid {...props}>
	<div></div>
	<div></div>
</HGrid>
