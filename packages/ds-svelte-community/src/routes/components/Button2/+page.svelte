<script lang="ts">
	import doc from "$lib/components/Button/Button.svelte?doc";

	import Doc from "$doclib/Doc.svelte";
	import Story from "$doclib/Story.svelte";
	import { Button } from "$lib";
	import GlobeFillIcon from "$lib/icons/GlobeFillIcon.svelte";

	let clicks = $state(0);
</script>

<Doc {doc}>
	<Story>
		<Button>Button</Button>
	</Story>

	<Story name="Click event" locked>
		<Button onclick={() => (clicks += 1)} variant="tertiary">Clicked {clicks} times</Button>
	</Story>

	<Story name="Icon only">
		<Button variant="secondary" disabled={false} loading>
			{#snippet iconLeft()}
				<GlobeFillIcon />
			{/snippet}
		</Button>
	</Story>
</Doc>
