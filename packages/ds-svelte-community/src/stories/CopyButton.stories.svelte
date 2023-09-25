<script>
	import { CopyButton } from "$lib";
	import { sizes, variants } from "$lib/components/CopyButton/type";
	import MoonIcon from "$lib/icons/MoonIcon.svelte";
	import StarIcon from "$lib/icons/StarIcon.svelte";
	import { action } from "@storybook/addon-actions";
	// eslint-disable-next-line
	// @ts-ignore
	import { Meta, Story, Template } from "@storybook/addon-svelte-csf";
</script>

<Meta
	title="components/CopyButton"
	component={CopyButton}
	parameters={{
		docs: {
			description: {
				component: `
Allow users to copy text to clipboard.

**Note:**
This differs from the \`@navikt/ds-react\` implementation in that it uses the \`navigator.clipboard\` API instead of the \`document.execCommand("copy")\` API.
This is to simplify code and support up-to-date browsers only. If you support IE or older browsers, reach out.
`,
			},
		},
	}}
	argTypes={{
		size: {
			control: "select",
			options: sizes,
		},
		variant: {
			control: "select",
			options: variants,
		},
		copyText: {
			control: "text",
			description: "Text to copy to clipboard.",
			type: { name: "string", required: true },
			table: {
				type: { summary: "string" },
			},
		},
		text: {
			description: "Optional text in button.",
		},
		activeText: {
			description: "Text shown when button is clicked. Only set if used with `text`-prop.",
		},
		activeDuration: {
			description: "Timeout duration in milliseconds.",
		},
		title: {
			description: "Accessible label for icon (ignored if text is set).",
		},
		activeTitle: {
			description: "Accessible label for icon in active-state (ignored if text is set).",
		},
	}}
	args={{
		copyText: "Copied from CopyButton!",
	}}
/>

<Template let:args>
	<CopyButton on:activeChange={action("on:activeChange")} {...args} />
</Template>

<Story name="Default" />

<Story name="Custom Icons">
	<CopyButton copyText="Custom icons">
		<svelte:fragment slot="icon"><StarIcon aria-label="Copy" /></svelte:fragment>
		<svelte:fragment slot="active-icon"><MoonIcon aria-label="Copied" /></svelte:fragment>
	</CopyButton>
</Story>

<Story name="With text" args={{ text: "Copy", activeText: "Copied!" }} />
