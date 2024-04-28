<script lang="ts">
	import type { Doc } from "@nais/vite-plugin-svelte-docs";
	import type { ComponentType, Snippet } from "svelte";
	import SvelteMarkdown from "svelte-markdown";
	import Properties from "./Properties.svelte";
	import Renderer, { type ComponentOptions } from "./Renderer.svelte";
	import { Context, setDocContext } from "./context.svelte";

	let {
		doc,
		component,
		extraChildrenDoc = [],
		preview,
		componentOptions,
		...restProps
	}: {
		doc: Doc;
		component: ComponentType;
		extraChildrenDoc?: Doc[];
		children: Snippet;
		componentOptions?: ComponentOptions;
		preview?: { width?: string };
	} = $props();

	const ctx = new Context(doc);
	setDocContext(ctx);

	const opts: ComponentOptions = $derived.by(() => {
		return {
			extraComponents: extraChildrenDoc.map((doc) => doc.name),
			...componentOptions,
		};
	});
</script>

<svelte:head>
	<title>{doc.name} - ds-svelte-community</title>
</svelte:head>

<h1>{doc.name}</h1>

<SvelteMarkdown source={doc.description} />

<Renderer {component} {...ctx.values} {preview} componentOptions={opts} {...restProps} />

<h2>Props</h2>

{#if extraChildrenDoc.length > 0}
	<h3>{doc.name}</h3>
{/if}
<Properties {doc} bind:values={ctx.values} />

{#each extraChildrenDoc as doc}
	<h3>{doc.name}</h3>
	<Properties {doc} />
{/each}
