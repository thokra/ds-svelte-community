<script lang="ts">
	import type { ComponentProps } from "svelte";
	import ErrorMessage from "./ErrorMessage.svelte";

	let props: Omit<ComponentProps<ErrorMessage>, "children"> = $props();
</script>

<ErrorMessage {...props}>ErrorMessage content</ErrorMessage>
