<script lang="ts">
	import doc from "$lib/components/Tooltip/Tooltip.svelte?doc";

	import Doc from "$doclib/Doc.svelte";
	import Story from "$doclib/Story.svelte";
	import { Button, Tooltip } from "$lib";
</script>

<Doc {doc}>
	<Story>
		<Tooltip content="Tooltip content">
			<Button variant="primary">Hover me</Button>
		</Tooltip>
	</Story>
</Doc>
