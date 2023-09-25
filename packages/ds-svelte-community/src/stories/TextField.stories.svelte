<script lang="ts">
	import { TextField } from "$lib";
	import { sizes, types } from "$lib/components/TextField/type";
	// eslint-disable-next-line
	// @ts-ignore
	import { Meta, Story, Template } from "@storybook/addon-svelte-csf";
	import source from "./examples/TextField.svelte?raw";

	let errorValue = "";
</script>

<Meta
	title="components/TextField"
	component={TextField}
	argTypes={{
		value: {
			control: { type: "text" },
			description: "Controlled value.",
			table: {
				type: {
					summary: "string | number",
				},
			},
		},
		htmlSize: {
			control: { type: "number" },
			description: "Size of the input element.",
			table: {
				type: {
					summary: "number",
				},
			},
		},
		hideLabel: {
			description: "If enabled shows the label and description for screenreaders only.",
		},
		type: {
			control: "select",
			options: types,
			description: "Type of the input element.",
			table: {
				type: {
					summary: types.join(" | "),
				},
			},
		},
		error: {
			description: "Error message for element.",
		},
		errorId: {
			control: "text",
			description: "Override internal errorId.",
			table: { type: { summary: "string" } },
		},
		size: {
			control: "select",
			options: sizes,
			description: "Changes font-size, padding and gaps.",
			table: {
				type: {
					summary: sizes.join(" | "),
				},
			},
		},
		disabled: {
			control: "boolean",
			description:
				"Disables the input element.\n\n*Note: Avoid using if possible for accessibility purposes*",
			table: {
				type: {
					summary: "boolean",
				},
			},
		},
		id: {
			description: "Override internal id.",
		},
	}}
/>

<Template let:args>
	<div class="colgap">
		{#each types as type}
			<TextField {...args} {type}>
				<span slot="label">Input type {type}</span>
			</TextField>
		{/each}
	</div>
</Template>

<Template id="tplArgs" let:args>
	<div class="colgap">
		<TextField {...args}>
			<svelte:fragment slot="label">Ipsum enim quis culpa</svelte:fragment>
		</TextField>
		<TextField {...args} size="small">
			<svelte:fragment slot="label">Ipsum enim quis culpa</svelte:fragment>
		</TextField>
	</div>
</Template>

<Story name="Default" {source} />

<Story name="Error">
	<div class="colgap">
		<TextField
			bind:value={errorValue}
			error={errorValue != "123" ? "Invalid input. Please type 123" : ""}
		>
			<svelte:fragment slot="label">Enter 123</svelte:fragment>
			<svelte:fragment slot="description">Enter 123 to remove error</svelte:fragment>
		</TextField>
		<TextField
			bind:value={errorValue}
			error={errorValue != "123" ? "Invalid input. Please type 123" : ""}
			size="small"
		>
			<svelte:fragment slot="label">Enter 123</svelte:fragment>
			<svelte:fragment slot="description">Enter 123 to remove error</svelte:fragment>
		</TextField>
	</div>
</Story>

<Story name="Description">
	<div class="colgap">
		<TextField>
			<svelte:fragment slot="label">Ipsum enim quis culpa</svelte:fragment>
			<svelte:fragment slot="description"
				>Consectetur labore velit eiusmod Lorem ut nostrud mollit labore ullamco laboris laboris in.
			</svelte:fragment>
		</TextField>
		<TextField>
			<svelte:fragment slot="label">Ipsum enim quis culpa</svelte:fragment>
			<svelte:fragment slot="description"
				>Consectetur labore velit eiusmod Lorem ut nostrud mollit labore ullamco laboris laboris in.
			</svelte:fragment>
		</TextField>
	</div>
</Story>

<Story name="Disabled" template="tplArgs" args={{ disabled: true }} />

<style>
	.colgap {
		display: flex;
		flex-direction: column;
		gap: 2rem;
		align-items: center;
	}
</style>
