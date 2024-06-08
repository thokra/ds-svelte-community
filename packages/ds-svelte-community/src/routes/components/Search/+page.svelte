<script lang="ts">
	import doc from "$lib/components/Search/Search.svelte?doc";

	import Doc from "$doclib/Doc.svelte";
	import Story from "$doclib/Story.svelte";
	import { Search } from "$lib";

	let value = $state("");
</script>

<Doc {doc}>
	<Story>
		<Search label="Search this page" bind:value />
	</Story>
</Doc>
