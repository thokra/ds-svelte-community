<script>
	import ConfirmationPanel from "$lib/components/ConfirmationPanel/ConfirmationPanel.svelte";
	import { sizes } from "$lib/components/ConfirmationPanel/type";
	import { Meta, Story, Template } from "@storybook/addon-svelte-csf";
	import source from "./examples/ConfirmationPanel.svelte?raw";
</script>

<Meta
	title="components/ConfirmationPanel"
	component={ConfirmationPanel}
	argTypes={{
		error: {
			description: "Error message for element.",
		},
		errorId: {
			description: "Override internal errorId.",
		},
		size: {
			control: "select",
			options: sizes,

			description: "Changes font-size, padding and gaps.",
		},
		value: {
			description: "The value of the HTML element.",
		},
		id: {
			description: "Override internal id.",
		},

		checked: {
			description: "Wether the checkbox is checked, can be used with `bind:checked`.",
		},
	}}
/>

<Template let:args>
	<ConfirmationPanel {...args}>
		<svelte:fragment slot="label">Checkbox label text</svelte:fragment>

		Ipsum voluptate pariatur <a href="#test">test link</a> anim officia minim ut mollit voluptate exercitation
		nulla mollit.
	</ConfirmationPanel>
</Template>

<Story name="Default" {source} />

<Story name="Checked initially" args={{ checked: true }} />

<Story name="No content">
	<ConfirmationPanel>
		<svelte:fragment slot="label">Checkbox label text</svelte:fragment>
	</ConfirmationPanel>
</Story>

<Story name="Error" args={{ error: "Some descriptive error message" }} />
