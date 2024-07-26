<script lang="ts">
	import TextField from "./TextField.svelte";
	import type { Props } from "./type";

	let props: Omit<Omit<Omit<Props, "children">, "label">, "description"> = $props();
</script>

<TextField {...props}>
	{#snippet label()}Some label{/snippet}
	{#snippet description()}Some longer description{/snippet}
</TextField>
