<script lang="ts">
	import doc from "$lib/components/Alert/Alert.svelte?doc";

	import Doc from "$doclib/Doc.svelte";
	import Alert from "$lib/components/Alert/Alert.svelte";
</script>

<Doc {doc} component={Alert}>
	{#snippet previewChild()}
		Alert text
	{/snippet}
</Doc>
