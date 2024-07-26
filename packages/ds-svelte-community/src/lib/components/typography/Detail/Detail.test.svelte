<script lang="ts">
	import type { ComponentProps } from "svelte";
	import Detail from "./Detail.svelte";

	let props: Omit<ComponentProps<Detail>, "children"> = $props();
</script>

<Detail {...props}>Detail content</Detail>
