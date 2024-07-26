<script lang="ts">
	import type { ComponentProps } from "svelte";
	import Label from "./Label.svelte";

	let props: Omit<ComponentProps<Label>, "children"> = $props();
</script>

<Label {...props}>Label content</Label>
