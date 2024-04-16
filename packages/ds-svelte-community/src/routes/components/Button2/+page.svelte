<script lang="ts">
	import doc from "$lib/components/Button/Button.svelte?doc";

	import Doc from "$doclib/Doc.svelte";
	import Button from "$lib/components/Button/Button.svelte";
</script>

<Doc {doc} component={Button}>
	{#snippet previewChild()}
		Button text
	{/snippet}
</Doc>
