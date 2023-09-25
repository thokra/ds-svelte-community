<script>
	// eslint-disable-next-line
	// @ts-ignore
	import { Meta, Story, Template } from "@storybook/addon-svelte-csf";

	import { Tag } from "$lib";
	import { sizes, variants } from "$lib/components/Tag/type";
	import source from "./examples/Tag.svelte?raw";
</script>

<Meta
	title="components/Tag"
	component={Tag}
	argTypes={{
		variant: {
			control: "select",
			options: variants,
			description: "Changes visual profile of tag.",
			table: {
				type: {
					summary: variants.join(" | "),
				},
			},
		},
		size: {
			control: "select",
			options: sizes,
			description: "Changes font size.",
			table: {
				type: {
					summary: sizes.join(" | "),
				},
			},
		},
		as: {
			control: "text",
			description: "Tag to use for the element.",
		},
	}}
	args={{
		variant: "info",
		size: "medium",
	}}
/>

<Template let:args>
	<div class="rowgapwrap">
		<Tag {...args}>Some tag</Tag>
	</div>
</Template>

<Template id="all" let:args>
	<div class="rowgapwrap">
		{#each variants as variant}
			<Tag {...args} {variant}>{variant}</Tag>
		{/each}
	</div>
</Template>

<Story name="Default" {source} />

<Story name="All" template="all" args={{ variant: "neutral" }} />
<Story name="Small" template="all" args={{ size: "small" }} />
<Story name="Xsmall" template="all" args={{ size: "xsmall" }} />

<style>
	.rowgapwrap {
		display: flex;
		flex-wrap: wrap;
		gap: 1rem;
	}
</style>
