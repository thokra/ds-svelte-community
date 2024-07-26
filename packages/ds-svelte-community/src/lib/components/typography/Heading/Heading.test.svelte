<script lang="ts">
	import type { ComponentProps } from "svelte";
	import Heading from "./Heading.svelte";

	let props: Omit<ComponentProps<Heading>, "children"> = $props();
</script>

<Heading {...props}>Heading content</Heading>
