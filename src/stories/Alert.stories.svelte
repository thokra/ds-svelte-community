<script>
	import { Meta, Story, Template } from "@storybook/addon-svelte-csf";

	import Alert from "$lib/components/Alert.svelte";
	import BodyLong from "$lib/components/typography/BodyLong.svelte";
	import Heading from "$lib/components/typography/Heading.svelte";
</script>

<Meta
	title="ds-svelte/Alert"
	component={Alert}
	argTypes={{
		variant: {
			control: "select",
			options: ["error", "warning", "info", "success"],
		},
		size: {
			control: "select",
			options: ["medium", "small"],
		},
	}}
	args={{ variant: "info" }}
	parameters={{
		componentSubtitle: "**asdf**",
		docs: {
			description: {
				component: "Alerts **are** used to notify users of important information.",
			},
		},
	}}
/>

<Template let:args>
	<Alert {...args}>Id elit esse enim reprehenderit enim nisi veniam nostrud.</Alert>
</Template>

<Story name="Default" />

<Story name="With Heading">
	<Alert>
		<Heading spacing size="small" level="3">Aliquip duis est in commodo pariatur</Heading>
		<BodyLong>
			Ullamco ullamco laborum et commodo sint culpa cupidatat culpa qui laboris ex. Labore ex
			occaecat proident qui qui fugiat magna. Fugiat sint commodo consequat eu aute.
		</BodyLong>
	</Alert>
</Story>
