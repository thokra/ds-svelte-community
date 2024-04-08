<script lang="ts">
	import type { Doc } from "@nais/vite-plugin-svelte-docs";
	import type { ComponentType, Snippet } from "svelte";
	import SvelteMarkdown from "svelte-markdown";
	import Properties from "./Properties.svelte";
	import Renderer from "./Renderer.svelte";
	import { Context, setDocContext } from "./context.svelte";

	let {
		doc,
		component,
		previewChild,
	}: { doc: Doc; component: ComponentType; previewChild?: Snippet } = $props();

	const ctx = new Context(doc);
	setDocContext(ctx);
</script>

<h1>{doc.name}</h1>

<SvelteMarkdown source={doc.description} />

<Renderer {component} {...ctx.values} children={previewChild} />

<h2>Props</h2>
<Properties {doc} bind:values={ctx.values} />
