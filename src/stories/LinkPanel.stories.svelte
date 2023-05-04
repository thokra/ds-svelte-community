<script>
	import { Meta, Story, Template } from "@storybook/addon-svelte-csf";

	import { LinkPanel } from "$lib/components/LinkPanel";
	import LinkPanelTitle from "$lib/components/LinkPanel/LinkPanelTitle.svelte";
	import LinkPanelDescription from "$lib/components/LinkPanel/LinkPanelDescription.svelte";
</script>

<Meta title="ds-svelte/LinkPanel" component={LinkPanel} />

<Template let:args>
	<LinkPanel {...args} href="#link">
		<LinkPanelTitle>Some actionable text</LinkPanelTitle>
	</LinkPanel>
</Template>

<Story name="Default" />

<Story name="Description" let:args>
	<LinkPanel {...args} href="#link">
		<LinkPanelTitle>Some actionable text</LinkPanelTitle>
		<LinkPanelDescription>A short description about the actions possible</LinkPanelDescription>
	</LinkPanel>
</Story>

<Story name="No border" args={{ border: false }} />
