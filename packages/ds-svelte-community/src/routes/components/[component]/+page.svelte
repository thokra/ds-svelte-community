<script lang="ts">
	import Properties from "$doclib/Properties.svelte";
	import { Context, setDocContext } from "$doclib/context.svelte";
	import * as comps from "$lib";
	import SvelteMarkdown from "svelte-markdown";
	import type { PageData } from "./$types";

	export let data: PageData;

	const ctx = new Context(data.doc);
	setDocContext(ctx);

	// const page = import(`../${data.component}.svelte`);

	// $: comp = comps[data.doc.name as keyof typeof comps];

	_ = comps;
	console.log("ANYCA", data);
</script>

<h1>{data.doc.name}</h1>

<SvelteMarkdown source={data.doc.description} />

<!-- <Renderer component={comp} componentOptions={{ body: "Alert text" }} {...ctx.values} /> -->

<h2>Props</h2>
<Properties doc={data.doc} bind:values={ctx.values} />

<!--
<Renderer component={Alert} componentOptions={{ body: "Alert text" }} {...values} />

<Properties {doc} bind:values /> -->

<!--
{#await page}
	<p>Loading...</p>
{:then module}
	<svelte:component this={module.default} />
{:catch error}
	<p style="color: red">{error.message}</p>
{/await} -->
