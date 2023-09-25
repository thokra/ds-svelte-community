<script>
	// eslint-disable-next-line
	// @ts-ignore
	import { Meta, Story, Template } from "@storybook/addon-svelte-csf";

	import { LinkPanel } from "$lib/components/LinkPanel";
	import LinkPanelDescription from "$lib/components/LinkPanel/LinkPanelDescription.svelte";
	import LinkPanelTitle from "$lib/components/LinkPanel/LinkPanelTitle.svelte";
	import source from "./examples/LinkPanel.svelte?raw";
</script>

<Meta
	title="components/LinkPanel"
	component={LinkPanel}
	argTypes={{
		border: {
			description: "Whether to show a border around the panel",
		},
		href: {
			control: "text",
			type: { name: "string", required: true },
			description: "Link to navigate to",
			table: {
				type: { summary: "string" },
			},
		},
	}}
/>

<Template let:args>
	<LinkPanel {...args} href="#link">
		<LinkPanelTitle>Some actionable text</LinkPanelTitle>
		<LinkPanelDescription>A short description about the actions possible</LinkPanelDescription>
	</LinkPanel>
</Template>

<Story name="Default" {source} />

<Story name="Only title" let:args>
	<LinkPanel {...args} href="#link">
		<LinkPanelTitle>Some actionable text</LinkPanelTitle>
	</LinkPanel>
</Story>

<Story name="No border" args={{ border: false }} />
