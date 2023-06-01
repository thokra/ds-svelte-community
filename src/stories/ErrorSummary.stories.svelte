<script>
	import { Meta, Story, Template } from "@storybook/addon-svelte-csf";

	import { ErrorSummary, ErrorSummaryItem } from "$lib/components/ErrorSummary";
	import { headingTags, sizes } from "$lib/components/ErrorSummary/type";
	import source from "./examples/ErrorSummary.svelte?raw";
</script>

<Meta
	title="components/ErrorSummary"
	component={ErrorSummary}
	argTypes={{
		size: {
			control: "select",
			options: sizes,
			description: "Changes padding and font-sizes.",
		},
		heading: {
			control: "text",
			description: "Heading text.",
		},
		headingTag: {
			control: "select",
			options: headingTags,
			description: "Allows setting a different HTML h-tag.",
		},
	}}
/>

<Template let:args>
	<ErrorSummary {...args}>
		<ErrorSummaryItem href="#1">Checkbox needs to be checked</ErrorSummaryItem>
		<ErrorSummaryItem href="#2">Textfield requires valid email</ErrorSummaryItem>
	</ErrorSummary>
</Template>

<Story name="Default" args={{ heading: "Some errors occurred" }} {source} />
<Story name="Small" args={{ heading: "Some errors occurred", size: "small" }} />
