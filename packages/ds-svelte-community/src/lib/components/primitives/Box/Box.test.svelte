<script lang="ts">
	import Box from "./Box.svelte";
	import type { BoxProps } from "./type";

	let props: Omit<BoxProps, "children"> = $props();
</script>

<Box {...props}>Box body</Box>
