<script lang="ts">
	import doc from "$lib/components/Button/Button.svelte?doc";

	import Doc from "$doclib/Doc.svelte";
	import Story from "$doclib/Story.svelte";
	import { Button } from "$lib";

	let clicks = $state(0);
	let text = "hello";
</script>

<Doc {doc}>
	<Story>
		<Button loading variant="secondary">{text}</Button>
	</Story>

	<Story name="Click event">
		<Button onclick={() => clicks++} variant="secondary">
			Clicked {clicks} times
		</Button>
		{#if clicks > 5}
			<p>Clicks are over 5</p>
		{/if}
	</Story>
</Doc>
