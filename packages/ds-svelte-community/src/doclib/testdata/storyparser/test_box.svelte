<script lang="ts">
	import doc from "$lib/components/Checkbox/Checkbox.svelte?doc";

	import Doc from "$doclib/Doc.svelte";
	import Story from "$doclib/Story.svelte";
	import { Checkbox } from "$lib";

	let selected = $state(false);
</script>

<Doc {doc}>
	<Story>
		<Checkbox bind:checked={selected}>Checkbox text</Checkbox>
		<p>Checkbox is {selected}</p>
	</Story>
</Doc>
