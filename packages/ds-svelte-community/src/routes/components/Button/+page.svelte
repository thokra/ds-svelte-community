<script lang="ts">
	import doc from "$lib/components/Button/Button.svelte?doc";

	import Doc from "$doclib/Doc.svelte";
	import Story from "$doclib/Story.svelte";
	import { Button } from "$lib";
	import { GlobeFillIcon } from "$lib/icons";

	let clicks = $state(0);
</script>

<Doc {doc}>
	<Story>
		<Button>Button text</Button>
	</Story>

	<Story name="Click event">
		<Button onclick={() => clicks++} variant="tertiary">
			Clicked {clicks} times
		</Button>
	</Story>

	<Story name="Icon only">
		<Button variant="secondary">
			{#snippet iconLeft()}
				<GlobeFillIcon />
			{/snippet}
		</Button>
	</Story>

	<Story name="With icon">
		<Button variant="secondary">
			{#snippet iconLeft()}
				<GlobeFillIcon />
			{/snippet}

			Button with icon
		</Button>
	</Story>
</Doc>
