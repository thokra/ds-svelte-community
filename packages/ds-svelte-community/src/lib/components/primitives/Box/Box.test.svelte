<script lang="ts">
	import Box from "./Box.svelte";
	import type { BoxProps } from "./type";

	type $$Props = BoxProps;
</script>

<Box {...$$props}>Box body</Box>
