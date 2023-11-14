<script lang="ts">
	import HGrid from "./HGrid.svelte";
	import type { HGridProps } from "./type";

	type $$Props = HGridProps;
</script>

<HGrid {...$$props}>
	<div />
	<div />
</HGrid>
