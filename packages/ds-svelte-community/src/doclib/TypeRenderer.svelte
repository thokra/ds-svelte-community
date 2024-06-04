<script lang="ts">
	import { dev } from "$app/environment";
	import type { Type } from "@nais/vite-plugin-svelte-docs";

	let { type: typ }: { type: Type } = $props();
</script>

{#if Array.isArray(typ)}
	{#each typ as t}
		<svelte:self type={t} />
	{/each}
{:else if typ.type == "union"}
	{#each typ.values as t}
		<svelte:self type={t} />
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
