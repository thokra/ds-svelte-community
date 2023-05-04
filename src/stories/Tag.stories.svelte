<script>
	import { Meta, Story, Template } from "@storybook/addon-svelte-csf";

	import Tag from "$lib/components/Tag.svelte";

	const variants = [
		"warning",
		"warning-filled",
		"error",
		"error-filled",
		"info",
		"info-filled",
		"success",
		"success-filled",
		"neutral",
		"neutral-filled",
		"alt1",
		"alt1-filled",
		"alt2",
		"alt2-filled",
		"alt3",
		"alt3-filled",
	];
</script>

<Meta title="ds-svelte/Tag" component={Tag} />

<Template let:args>
	<div class="rowgapwrap">
		{#each variants as variant}
			<Tag {...args} {variant}>{variant}</Tag>
		{/each}
	</div>
</Template>

<Story name="Default" args={{ variant: "neutral" }} />

<Story name="Small" args={{ size: "small" }} />
<Story name="Xsmall" args={{ size: "xsmall" }} />

<style>
	.rowgapwrap {
		display: flex;
		flex-wrap: wrap;
		gap: 1rem;
	}
</style>
