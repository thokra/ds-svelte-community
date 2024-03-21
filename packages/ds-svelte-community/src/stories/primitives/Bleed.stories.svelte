<script lang="ts" context="module">
	import Bleed from "$lib/components/primitives/Bleed/Bleed.svelte";
	import type { BleedProps } from "$lib/components/primitives/Bleed/type";
	import Box from "$lib/components/primitives/Box/Box.svelte";
	import BodyLong from "$lib/components/typography/BodyLong/BodyLong.svelte";

	export const meta: MetaProps = {
		title: "primitives/Bleed",
		component: Bleed,
		argTypes: {
			marginInline: {
				table: {
					type: { summary: "string | object" },
				},
			},
			marginBlock: {
				table: {
					type: { summary: "string | object" },
				},
			},
			reflectivePadding: {
				control: "boolean",
				table: {
					type: { summary: "boolean" },
				},
			},
		},
		args: {
			marginInline: "0 10",
		} as BleedProps,
	};
</script>

<script lang="ts">
	import { Story, Template, type MetaProps } from "@storybook/addon-svelte-csf";
</script>

<Template let:args>
	<Box background="surface-alt-1-subtle" padding="5">
		<Box background="surface-alt-2-subtle" padding="5">
			<Bleed {...args}>
				<Box padding="3" background="surface-success-subtle">
					<BodyLong>marginInline={JSON.stringify(args.marginInline)}</BodyLong>
					<BodyLong>marginBlock={JSON.stringify(args.marginBlock)}</BodyLong>
				</Box>
			</Bleed>
		</Box>
	</Box>
</Template>

<Story name="Default" />
