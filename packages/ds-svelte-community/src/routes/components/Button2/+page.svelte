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
		<Button loading variant="secondary">Button</Button>
	</Story>

	<Story name="Click event">
		<Button onclick={() => clicks++}>
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
</Doc>
