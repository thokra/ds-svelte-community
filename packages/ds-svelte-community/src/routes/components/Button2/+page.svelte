<script lang="ts">
	import doc from "$lib/components/Button/Button.svelte?doc";

	import Doc from "$doclib/Doc.svelte";
	import Story from "$doclib/Story.svelte";
	import Button from "$lib/components/Button/Button.svelte";
	import GlobeFillIcon from "$lib/icons/GlobeFillIcon.svelte";
</script>

<Doc {doc} component={Button}>
	<Story>Button text</Story>

	<Story name="Icon only" iconOnly>
		{#snippet iconLeft()}
			<GlobeFillIcon />
		{/snippet}
	</Story>
</Doc>
