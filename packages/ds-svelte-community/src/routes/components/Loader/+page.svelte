<script lang="ts">
	import doc from "$lib/components/Loader/Loader.svelte?doc";

	import Doc from "$doclib/Doc.svelte";
	import Story from "$doclib/Story.svelte";
	import { Loader } from "$lib";
</script>

<Doc {doc}>
	<Story>
		<Loader title="Some title" />
	</Story>
</Doc>
