<script lang="ts">
	import doc from "$lib/components/HelpText/HelpText.svelte?doc";

	import Doc from "$doclib/Doc.svelte";
	import Story from "$doclib/Story.svelte";
	import { HelpText } from "$lib";
	import Alert from "$lib/components/Alert/Alert.svelte";
</script>

<Doc {doc}>
	{#snippet extraDescription()}
		<Alert variant="warning">
			Keyboard interaction is incomplete. Missing <kbd>esc</kbd> to close popover.
		</Alert>
	{/snippet}
	<Story>
		<HelpText title="Some title">Extended description</HelpText>
	</Story>
</Doc>
