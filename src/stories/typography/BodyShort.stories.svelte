<script>
	import { Meta, Story, Template } from "@storybook/addon-svelte-csf";

	import BodyShort from "$lib/components/typography/BodyShort.svelte";

	const text = "Deserunt veniam eu fugiat ad est occaecat aliqua nisi aliquip.";
</script>

<Meta title="typography/BodyShort" component={BodyShort} />

<Template let:args>
	<BodyShort {...args}>{text}</BodyShort>
</Template>

<Story name="Default" />

<Story name="Small" args={{ size: "small" }} />

<Story name="Spacing" args={{ spacing: true }} />
