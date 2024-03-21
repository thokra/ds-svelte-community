<script lang="ts" context="module">
	import Box from "$lib/components/primitives/Box/Box.svelte";
	import Page from "$lib/components/primitives/Page/Page.svelte";
	import PageBlock from "$lib/components/primitives/Page/PageBlock.svelte";
	import bgColors from "@navikt/ds-tokens/src/colors-bg.json";

	export const meta: MetaProps = {
		title: "primitives/Page",
		component: Page,
		argTypes: {
			background: {
				control: "select",
				options: Object.keys(bgColors.a).concat("surface-subtle"),
			},
			footerPosition: {
				control: "select",
				options: [undefined, "belowFold"],
			},
			contentBlockPadding: {
				control: "select",
				options: ["end", "none"],
			},
		},

		parameters: {
			layout: "fullscreen",
			docs: {
				story: {
					inline: false,
					height: 500,
				},
			},
		},
	};
</script>

<script lang="ts">
	import { Story, Template, type MetaProps } from "@storybook/addon-svelte-csf";
</script>

<Template let:args>
	<Page {...args}>
		<PageBlock width="lg" gutters={false} as="header">
			<Box padding="8" background="surface-alt-1-subtle">Header</Box>
		</PageBlock>

		<PageBlock width="lg" gutters={false} as="main">
			<Box padding="8" background="surface-alt-3-subtle" style="height: 150px;">Main</Box>
		</PageBlock>

		<svelte:fragment slot="footer">
			<PageBlock width="lg" gutters={false} as="footer">
				<Box padding="8" background="surface-alt-2-subtle">Footer</Box>
			</PageBlock>
		</svelte:fragment>
	</Page>
</Template>

<Story name="Default" />
