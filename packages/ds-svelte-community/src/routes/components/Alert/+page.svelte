<script lang="ts">
	import doc from "$lib/components/Alert/Alert.svelte?doc";

	import Properties from "$doclib/Properties.svelte";
	import Renderer from "$doclib/Renderer.svelte";
	import Alert from "$lib/components/Alert/Alert.svelte";
	import SvelteMarkdown from "svelte-markdown";

	let values = $state({});
</script>

<h1>{Alert.name}</h1>

<SvelteMarkdown source={doc.description} />

<Renderer component={Alert} {...values}>Content</Renderer>

<Properties {doc} bind:values />
