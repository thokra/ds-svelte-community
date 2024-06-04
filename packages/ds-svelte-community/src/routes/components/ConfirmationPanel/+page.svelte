<script lang="ts">
	import doc from "$lib/components/ConfirmationPanel/ConfirmationPanel.svelte?doc";

	import Doc from "$doclib/Doc.svelte";
	import Story from "$doclib/Story.svelte";
	import { ConfirmationPanel } from "$lib";
</script>

<Doc {doc} preview={{ width: "80%" }}>
	<Story>
		<ConfirmationPanel label="Descriptive content" />
	</Story>

	<Story name="With description">
		<ConfirmationPanel checked>
			{#snippet label()}
				Label content
			{/snippet}

			Descriptive content
		</ConfirmationPanel>
	</Story>

	<Story name="Error">
		<ConfirmationPanel label="Label content" error="Some error message">
			Descriptive content
		</ConfirmationPanel>
	</Story>
</Doc>
