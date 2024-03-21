<script lang="ts" context="module">
	import HGrid from "$lib/components/primitives/HGrid/HGrid.svelte";
	import type { HGridProps } from "$lib/components/primitives/HGrid/type";

	const columnsVariants = {
		Number: "columnNumber",
		String: "columnString",
		Object: "columnObject",
	};

	export const meta: MetaProps = {
		title: "primitives/HGrid",
		component: HGrid,
		argTypes: {
			columnsType: {
				description: "Helper within storybook to set the `columns` prop.",
				options: Object.keys(columnsVariants),
				control: { type: "radio" },
				table: { category: "Helpers" },
			},
			columnObject: {
				description: "Helper within storybook to set the `columns` prop.",
				control: { type: "object" },
				table: { category: "Helpers" },
			},
			columnNumber: {
				control: "number",
				description: "Helper within storybook to set the `columns` prop.",
				table: { type: { summary: "number" }, category: "Helpers" },
			},
			columnString: {
				control: "text",
				description: "Helper within storybook to set the `columns` prop.",
				table: { type: { summary: "string" }, category: "Helpers" },
			},
			gap: {
				table: {
					type: { summary: "string | object" },
				},
			},
			align: {
				control: "select",
				options: [undefined, "start", "center", "end"],
				table: {
					type: { summary: "start | center | end" },
				},
			},
		},
		args: {
			columnsType: Object.keys(columnsVariants)[0],
			columnNumber: 4,
			columnObject: { xs: 1, md: 4 },
			columnString: "repeat(3, minmax(0, 1fr))",
			gap: "4",
		} as HGridProps,
	};

	const calcColumns = (args: {
		columnsType: keyof typeof columnsVariants;
		[column: string]: unknown;
	}): HGridProps["columns"] => {
		return args[columnsVariants[args.columnsType]] as never;
	};
</script>

<script lang="ts">
	import { omit } from "$lib/components/helpers";
	import { Story, Template, type MetaProps } from "@storybook/addon-svelte-csf";
	import Placeholder from "../helpers/Placeholder.svelte";
</script>

<Template let:args>
	<HGrid
		{...omit(args, "columnsType", "columnNumber", "columnObject", "columnString")}
		columns={calcColumns(args)}
	>
		<Placeholder>1</Placeholder>
		<Placeholder>2</Placeholder>
		<Placeholder height="auto">3</Placeholder>
		<Placeholder>4</Placeholder>
	</HGrid>
</Template>

<Story name="Default" />
