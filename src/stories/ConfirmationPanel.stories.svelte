<script>
	import ConfirmationPanel from "$lib/components/ConfirmationPanel.svelte";
	import Link from "$lib/components/Link.svelte";
	import { Meta, Story, Template } from "@storybook/addon-svelte-csf";
</script>

<Meta title="ds-svelte/ConfirmationPanel" component={ConfirmationPanel} />

<Template let:args>
	<ConfirmationPanel {...args}>
		<svelte:fragment slot="label">Checkbox label text</svelte:fragment>

		Ipsum voluptate pariatur <Link href="#test">testlink</Link> anim officia minim ut mollit voluptate
		exercitation nulla mollit.
	</ConfirmationPanel>
</Template>

<Story name="Default" />

<Story name="Checked initially" args={{ checked: true }} />

<Story name="No content">
	<ConfirmationPanel>
		<svelte:fragment slot="label">Checkbox label text</svelte:fragment>
	</ConfirmationPanel>
</Story>

<Story name="Error" args={{ error: "Some descriptive error message" }} />
