<script lang="ts">
	import doc from "$lib/components/CopyButton/CopyButton.svelte?doc";

	import Doc from "$doclib/Doc.svelte";
	import Story from "$doclib/Story.svelte";
	import { CopyButton } from "$lib";
	import { MoonIcon, SunIcon } from "$lib/icons";
</script>

<Doc {doc}>
	<Story>
		<CopyButton copyText="Copied from CopyButton!" />
	</Story>

	<Story name="With text">
		<CopyButton copyText="Copied from CopyButton!" text="Copy" activeText="Copied" />
	</Story>

	<Story name="Custom icon">
		<CopyButton copyText="Copied from CopyButton!" text="Copy" activeText="Copied">
			{#snippet icon(active)}
				{#if active}
					<SunIcon />
				{:else}
					<MoonIcon />
				{/if}
			{/snippet}
		</CopyButton>
	</Story>
</Doc>
