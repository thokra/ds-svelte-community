<script lang="ts" context="module">
	import Hide from "$lib/components/primitives/Responsive/Hide.svelte";
	import type { BaseResponsiveProps } from "$lib/components/primitives/Responsive/type";

	const breakpoints = [undefined, "sm", "md", "lg", "xl"];

	export const meta: MetaProps = {
		title: "primitives/Hide",
		component: Hide,
		argTypes: {
			above: {
				control: "select",
				options: breakpoints,
				table: {
					type: { summary: breakpoints.join(" | ") },
				},
			},
			below: {
				control: "select",
				options: breakpoints,
				table: {
					type: { summary: breakpoints.join(" | ") },
				},
			},
			as: {
				control: "text",
				description: "HTML element to render as.",
				table: {
					type: { summary: "string" },
				},
			},
		},
		args: {
			above: "md",
		} as BaseResponsiveProps,
	};
</script>

<script lang="ts">
	import { Story, Template, type MetaProps } from "@storybook/addon-svelte-csf";
	import Placeholder from "../helpers/Placeholder.svelte";
</script>

<Template let:args>
	<Hide {...args}>
		<Placeholder>I'm possibly hidden</Placeholder>
	</Hide>
	<Placeholder background="--a-green-900">Always show me</Placeholder>
</Template>

<Story name="Default" />
