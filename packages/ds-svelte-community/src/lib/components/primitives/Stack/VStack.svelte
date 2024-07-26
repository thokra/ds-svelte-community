<script lang="ts">
	import Stack from "./Stack.svelte";
	import type { StackProps } from "./type";

	let { wrap = false, ...props }: StackProps = $props();
</script>

<Stack {...props} direction="column" {wrap} />
