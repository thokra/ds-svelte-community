<script lang="ts">
	import { Tab, TabList, TabPanel, Tabs } from "$lib";
	import type { Doc } from "@nais/vite-plugin-svelte-docs";
	import { untrack, type Snippet } from "svelte";
	import SvelteMarkdown from "svelte-markdown";
	import Properties from "./Properties.svelte";
	import Renderer, { type ComponentOptions } from "./Renderer.svelte";
	import type { StorySnippet } from "./Story.svelte";

	type Story = {
		name: string;
		source: string;
		snippet: StorySnippet;
		locked: boolean;
		lockedProps: string[];
		props: { key: string; value: string }[];
	};

	let {
		doc,
		extraChildrenDoc = [],
		stories,
	}: {
		doc: Doc;
		extraChildrenDoc?: Doc[];
		children?: Snippet;
		componentOptions?: ComponentOptions;
		preview?: { width?: string };
		stories?: Story[];
	} = $props();

	let tab = $state("Default");
	let values: Record<string, unknown> = $state({});

	$effect(() => {
		console.log("Run effect");
		const story = stories?.find((s) => s.name === tab);
		if (story) {
			console.log("Found story");
			untrack(() => {
				values = {};
				story.props.forEach((p) => {
					values[p.key] = p.value;
				});
			});
		} else {
			console.log("No story");
		}
	});
	// let values = $derived.by(() => {
	// 	const ret: Record<string, unknown> = {};
	// 	stories
	// 		?.find((s) => s.name === tab)
	// 		?.props.forEach((p) => {
	// 			ret[p.key] = p.value;
	// 		});
	// 	return ret;
	// });
</script>

<svelte:head>
	<title>{doc.name} - ds-svelte-community</title>
</svelte:head>

<h1>{doc.name}</h1>

<SvelteMarkdown source={doc.description} />

<Tabs bind:value={tab}>
	<TabList>
		{#each stories || [] as { name }}
			<Tab value={name}>
				{name}
			</Tab>
		{/each}
	</TabList>

	{#each stories || [] as { name, snippet, source }}
		<TabPanel value={name}>
			<Renderer children={snippet} source={atob(source)} {values} />
		</TabPanel>
	{/each}
</Tabs>

<h2>Props</h2>
{#key tab}
	<Properties {doc} bind:values />
{/key}

{#if extraChildrenDoc.length > 0}
	<h3>{doc.name}</h3>
{/if}

{#each extraChildrenDoc as doc}
	<h3>{doc.name}</h3>
	<Properties {doc} />
{/each}
