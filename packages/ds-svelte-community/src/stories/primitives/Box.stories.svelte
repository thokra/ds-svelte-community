<script lang="ts" context="module">
	import Box from "$lib/components/primitives/Box/Box.svelte";
	import BodyLong from "$lib/components/typography/BodyLong/BodyLong.svelte";
	import bgColors from "@navikt/ds-tokens/src/colors-bg.json";
	import borderColors from "@navikt/ds-tokens/src/colors-border.json";
	import surfaceColors from "@navikt/ds-tokens/src/colors-surface.json";
	import shadows from "@navikt/ds-tokens/src/shadow.json";

	export const meta: MetaProps = {
		title: "primitives/Box",
		component: Box,
		argTypes: {
			background: {
				control: "select",
				options: Object.keys({ ...bgColors.a, ...surfaceColors.a }),
				table: {
					type: { summary: Object.keys({ ...bgColors.a, ...surfaceColors.a }).join(" | ") },
				},
			},
			borderColor: {
				control: "select",
				options: Object.keys(borderColors.a),
				table: {
					type: { summary: Object.keys(borderColors.a).join(" | ") },
				},
			},
			borderRadius: {
				table: {
					type: { summary: "string | object" },
				},
			},
			borderWidth: {
				control: "text",
				table: {
					type: { summary: "string" },
				},
			},
			padding: {
				table: {
					type: { summary: "string | object" },
				},
			},
			paddingInline: {
				table: {
					type: { summary: "string | object" },
				},
			},
			paddingBlock: {
				table: {
					type: { summary: "string | object" },
				},
			},
			shadow: {
				control: "select",
				options: Object.keys(shadows.a.shadow),
				table: {
					type: { summary: Object.keys(shadows.a.shadow).join(" | ") },
				},
			},
		},

		args: {
			background: "surface-alt-2",
			borderColor: "border-alt-3",
			borderRadius: "full",
			borderWidth: "2px",
			padding: "20",
			paddingInline: "4",
			paddingBlock: "4",
			shadow: "large",
		},
	};
</script>

<script lang="ts">
	import { Story, Template, type MetaProps } from "@storybook/addon-svelte-csf";
</script>

<Template let:args>
	<!--👇 'on:click' allows to forward event to addon-actions  -->
	<Box {...args}>Box body</Box>
</Template>

<Story name="Default" />

<Story name="Card">
	<Box padding="4" borderColor="border-subtle" shadow="xsmall" borderRadius="xlarge">
		<h1>Card one</h1>
		<BodyLong>
			This is inside a box. Deserunt veniam eu fugiat ad est occaecat aliqua nisi aliquip. Aute amet
			occaecat ex aliqua irure elit labore
		</BodyLong>
	</Box>
</Story>
