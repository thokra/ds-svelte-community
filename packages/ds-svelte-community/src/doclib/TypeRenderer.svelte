<script lang="ts">
	import { dev } from "$app/environment";
	import Button from "$lib/components/Button/Button.svelte";
	import type { Type } from "@nais/vite-plugin-svelte-docs";

	let { type: typ, show = true }: { type: Type; show?: boolean } = $props();

	const maxItems = 10;
	let shouldShowAll = $derived(
		(!Array.isArray(typ) && typ.type == "union" && typ.values.length < maxItems) ||
			(!Array.isArray(typ) && typ.type != "union") ||
			(Array.isArray(typ) && typ.length < maxItems),
	);

	let showAll = $state(false);
</script>

{#if show}
	{#if Array.isArray(typ)}
		{#each typ as t, i}
			<svelte:self type={t} show={shouldShowAll || showAll || i < maxItems} />
		{/each}
	{:else if typ.type == "union"}
		{#each typ.values as t, i}
			<svelte:self type={t} show={shouldShowAll || showAll || i < maxItems} />
		{/each}
	{:else if ["string", "number", "boolean", "undefined", "null"].includes(typ.type)}
		<code>{typ.type}</code>
	{:else if typ.type == "literal"}
		<code>{typ.value}</code>
	{:else if typ.type == "interface"}
		<code>{typ.name}</code>
	{:else if typ.type == "unknown"}
		<code>unknown</code>
	{:else if typ.type == "snippet"}
		<code>Snippet</code>
	{:else}
		<code class:err={dev}>{typ.type}</code>
	{/if}
{/if}

{#if !shouldShowAll}
	<Button
		variant="tertiary-neutral"
		size="small"
		onclick={() => (showAll = !showAll)}
		style="display: inline;"
	>
		...
		{#if showAll}
			Hide
		{:else}
			Show all
		{/if}
	</Button>
{/if}

<style>
	code {
		margin-right: 0.3rem;
		margin-bottom: 0.3rem;
		display: inline-block;

		&.err {
			background: red;
		}
	}
</style>
