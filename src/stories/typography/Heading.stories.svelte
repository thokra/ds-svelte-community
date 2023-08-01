<script>
	// eslint-disable-next-line
	// @ts-ignore
	import { Meta, Story, Template } from "@storybook/addon-svelte-csf";

	import Heading from "$lib/components/typography/Heading.svelte";
</script>

<Meta title="typography/Heading" component={Heading} />

<Template let:args>
	<Heading {...args}>Some text</Heading>
</Template>

<Story name="Default" />

<Story name="Small" args={{ size: "small" }} />

<Story name="Spacing" args={{ spacing: true }} />
