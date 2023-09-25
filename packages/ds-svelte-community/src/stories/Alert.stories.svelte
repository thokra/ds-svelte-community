<script>
	// eslint-disable-next-line
	// @ts-ignore
	import { Meta, Story, Template } from "@storybook/addon-svelte-csf";

	import Alert from "$lib/components/Alert/Alert.svelte";
	import { sizes, variants } from "$lib/components/Alert/type";
	import BodyLong from "$lib/components/typography/BodyLong/BodyLong.svelte";
	import Heading from "$lib/components/typography/Heading/Heading.svelte";

	import source from "./examples/Alert.svelte?raw";
</script>

<Meta
	title="components/Alert"
	component={Alert}
	argTypes={{
		variant: {
			control: "select",
			options: variants,

			description: "Changes colors and icon usage when changed",
			table: {
				type: { summary: variants.join(" | ") },
				defaultValue: { summary: "info" },
			},
		},
		size: {
			control: "select",
			options: sizes,

			description: "Changes padding and font-sizes",
			table: {
				type: { summary: sizes.join(" | ") },
				defaultValue: { summary: "medium" },
			},
		},
		fullWidth: {
			description: "Removes border-radius",
		},
		inline: {
			description: "Removes background from Alert",
		},
	}}
/>

<Template let:args>
	<Alert {...args}>Id elit esse enim reprehenderit enim nisi veniam nostrud.</Alert>
</Template>

<Story name="Default" {source} />

<Story name="With Heading" let:args>
	<Alert {...args}>
		<Heading spacing size="small" level="3">Aliquip duis est in commodo pariatur</Heading>
		<BodyLong>
			Ullamco ullamco laborum et commodo sint culpa cupidatat culpa qui laboris ex. Labore ex
			occaecat proident qui qui fugiat magna. Fugiat sint commodo consequat eu aute.
		</BodyLong>
	</Alert>
</Story>
