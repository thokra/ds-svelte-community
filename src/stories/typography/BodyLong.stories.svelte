<script>
	import { Meta, Story, Template } from "@storybook/addon-svelte-csf";

	import BodyLong from "$lib/components/typography/BodyLong.svelte";

	const text =
		"Deserunt veniam eu fugiat ad est occaecat aliqua nisi aliquip. Aute amet occaecat ex aliqua irure elit labore pariatur. Proident pariatur proident pariatur magna consequat velit id commodo quis sunt tempor ullamco aliquip pariatur.";
</script>

<Meta title="typography/BodyLong" component={BodyLong} />

<Template let:args>
	<BodyLong {...args}>{text}</BodyLong>
</Template>

<Story name="Default" />

<Story name="Small" args={{ size: "small" }} />

<Story name="Spacing" args={{ spacing: true }} />
