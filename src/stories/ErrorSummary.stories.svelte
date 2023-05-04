<script>
	import { Meta, Story, Template } from "@storybook/addon-svelte-csf";

	import { ErrorSummary, ErrorSummaryItem } from "$lib/components/ErrorSummary";
</script>

<Meta title="ds-svelte/ErrorSummary" component={ErrorSummary} />

<Template let:args>
	<ErrorSummary {...args}>
		<ErrorSummaryItem href="#1">Checkbox needs to be checked</ErrorSummaryItem>
		<ErrorSummaryItem href="#2">Textfield requires valid email</ErrorSummaryItem>
	</ErrorSummary>
</Template>

<Story name="Default" args={{ heading: "Some errors occurred" }} />
<Story name="Small" args={{ heading: "Some errors occurred", size: "small" }} />
