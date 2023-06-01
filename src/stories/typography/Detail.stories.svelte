<script>
	import { Meta, Story, Template } from "@storybook/addon-svelte-csf";

	import Detail from "$lib/components/typography/Detail.svelte";

	const text = "Deserunt veniam eu fugiat ad est occaecat aliqua nisi aliquip.";
</script>

<Meta title="typography/Detail" component={Detail} />

<Template let:args>
	<Detail {...args}>{text}</Detail>
</Template>

<Story name="Default" />

<Story name="Uppercase" args={{ uppercase: true }} />

<Story name="Spacing" args={{ spacing: true }} />
