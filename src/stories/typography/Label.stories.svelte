<script>
	// eslint-disable-next-line
	// @ts-ignore
	import { Meta, Story, Template } from "@storybook/addon-svelte-csf";

	import Label from "$lib/components/typography/Label/Label.svelte";
</script>

<Meta title="typography/Label" component={Label} />

<Template let:args>
	<Label {...args}>Some text</Label>
</Template>

<Story name="Default" />

<Story name="Small" args={{ size: "small" }} />

<Story name="Spacing" args={{ spacing: true }} />
