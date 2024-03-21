<script lang="ts" context="module">
	import VStack from "$lib/components/primitives/Stack/VStack.svelte";
	import type { StackProps } from "$lib/components/primitives/Stack/type";

	export const meta: MetaProps = {
		title: "primitives/VStack",
		component: VStack,
		argTypes: {
			// 			/**
			//  * Justify-content
			//  */
			// justify?: ResponsiveProp<
			// 	"start" | "center" | "end" | "space-around" | "space-between" | "space-evenly"
			// >;
			// /**
			//  * Align-items
			//  */
			// align?: ResponsiveProp<"start" | "center" | "end" | "baseline" | "stretch">;
			// /**
			//  * flex-wrap
			//  */
			// wrap?: boolean;
			// /**
			//  * @example
			//  * gap='4'
			//  * gap={{xs: '2', sm: '3', md: '4', lg: '5', xl: '6'}}
			//  */
			// gap?: ResponsiveProp<SpacingScale>;
			// /**
			//  * flex-direction
			//  */
			// direction?: ResponsiveProp<"row" | "column">;

			// /**
			//  * HTML element to render as.
			//  */
			// as?: keyof SvelteHTMLElements;

			justify: {
				control: "select",
				options: ["start", "center", "end", "space-around", "space-between", "space-evenly"],
			},
			align: {
				control: "select",
				options: ["start", "center", "end", "baseline", "stretch"],
			},
			wrap: {
				control: "boolean",
			},
			gap: {
				control: "text",
			},
			as: {
				control: "text",
			},
		},
		args: {
			gap: "4",
		} as StackProps,
	};
</script>

<script lang="ts">
	import Spacer from "$lib/components/primitives/Stack/Spacer.svelte";
	import { Story, Template, type MetaProps } from "@storybook/addon-svelte-csf";
	import Placeholder from "../helpers/Placeholder.svelte";
</script>

<Template let:args>
	<VStack {...args}>
		<Placeholder width="3rem" />
		<Placeholder width="3rem" />
		<Placeholder width="3rem" />
		<Placeholder width="3rem" />
	</VStack>
</Template>

<Story name="Default" />

<Story name="VStack w/Spacer">
	<VStack>
		<Placeholder width="3rem" />
		<Spacer />
		<Placeholder width="3rem" />
	</VStack>
</Story>
