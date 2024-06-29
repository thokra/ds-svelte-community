<script lang="ts">
	import doc from "$lib/components/Tag/Tag.svelte?doc";

	import Doc from "$doclib/Doc.svelte";
	import Story from "$doclib/Story.svelte";
	import { Tag } from "$lib";
</script>

<Doc {doc}>
	<Story>
		<Tag>Tag label</Tag>
	</Story>
	<Story name="Using text prop">
		<Tag text="Tag label" variant="error" />
	</Story>
</Doc>
