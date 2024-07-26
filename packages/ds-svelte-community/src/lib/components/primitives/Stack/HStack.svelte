<script lang="ts">
	import Stack from "./Stack.svelte";
	import type { StackProps } from "./type";

	let props: StackProps = $props();
</script>

<Stack {...props} direction="row" />
