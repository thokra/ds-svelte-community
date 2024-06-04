<script lang="ts">
	import { page } from "$app/stores";
	import { Tab, TabList, TabPanel, Tabs } from "$lib";
	import Alert from "$lib/components/Alert/Alert.svelte";
	import type { Doc } from "@nais/vite-plugin-svelte-docs";
	import { type Snippet } from "svelte";
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
		preview,
		customTitle,
	}: {
		doc: Doc;
		customTitle?: string;
		extraChildrenDoc?: Doc[];
		children?: Snippet;
		componentOptions?: ComponentOptions;
		preview?: { width?: string };
		stories?: Story[];
	} = $props();

	// eslint-disable-next-line svelte/valid-compile
	let tab = $derived($page.url.searchParams.get("tab") || "Default");

	const story = $derived(stories?.find((s) => s.name === tab));
	const storyProps = () => {
		const ret: Record<string, unknown> = {};
		story?.props.forEach((p) => {
			ret[p.key] = p.value;
		});
		return ret;
	};

	let values: Record<string, unknown> = $state(storyProps());

	$effect(() => {
		values = storyProps();
	});

	// $effect(() => {
	// 	console.log("Run effect");
	// 	const story = stories?.find((s) => s.name === tab);
	// 	if (story) {
	// 		console.log("Found story");
	// 		untrack(() => {
	// 			values = {};
	// 			story.props.forEach((p) => {
	// 				values[p.key] = p.value;
	// 			});
	// 		});
	// 	} else {
	// 		console.log("No story");
	// 	}
	// });
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
	<title>{customTitle ?? doc.name} - ds-svelte-community</title>
</svelte:head>

<h1>{customTitle ?? doc.name}</h1>

<SvelteMarkdown source={doc.description} />

{#if !story}
	<Alert variant="warning">No story found for tab "{tab}"</Alert>
{:else}
	<Tabs value={tab}>
		<TabList>
			{#each stories || [] as { name }}
				<Tab
					as="a"
					data-sveltekit-replacestate
					value={name}
					href={name == "Default" ? "./" : `?tab=${name}`}
				>
					{name}
				</Tab>
			{/each}
		</TabList>

		<TabPanel value={story.name}>
			<Renderer children={story.snippet} source={atob(story.source)} {values} {preview} />
		</TabPanel>
	</Tabs>
{/if}

<h2>Properties</h2>

{#if extraChildrenDoc.length > 0}
	<h3>{doc.name}</h3>
{/if}

{#key tab}
	{#if !story || story.locked}
		<Properties {doc} />
	{:else}
		<Properties {doc} bind:values />
	{/if}
{/key}

{#each extraChildrenDoc as doc}
	<h3>{doc.name}</h3>
	<Properties {doc} />
{/each}
