<script lang="ts">
	import doc from "$lib/components/TextField/TextField.svelte?doc";

	import Doc from "$doclib/Doc.svelte";
	import Story from "$doclib/Story.svelte";
	import { TextField } from "$lib";
</script>

<Doc {doc}>
	<Story>
		<TextField label="Form label" type="text" />
	</Story>

	<Story name="Description">
		<TextField
			label="Form label"
			description="Input some text to test this component"
			type="text"
		/>
	</Story>

	<Story name="Using snippets">
		<TextField>
			{#snippet label()}
				Snippet form label
			{/snippet}
			{#snippet description()}
				Snippet description
			{/snippet}
		</TextField>
	</Story>
</Doc>
