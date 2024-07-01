<script lang="ts">
	import { Box } from "$lib";
	import type { Snippet } from "svelte";

	let {
		children,
	}: {
		children: Snippet;
	} = $props();
</script>

<Box background="surface-alt-3" padding="5" borderRadius="large">
	<Box background="surface-subtle" padding="5" borderRadius="medium">
		{@render children()}
	</Box>
</Box>
