<script lang="ts">
	import { Button, TextField } from "$lib";
	import Skeleton from "$lib/components/Skeleton/Skeleton.svelte";
	import { variants } from "$lib/components/Skeleton/type";
	import { Meta, Story, Template } from "@storybook/addon-svelte-csf";
	// import source from "./examples/Button.svelte?raw";
</script>

<Meta
	title="components/Skeleton"
	component={Skeleton}
	argTypes={{
		variant: {
			control: "select",
			options: variants,

			description: "Cange style of skeleton.",
			table: {
				type: { summary: variants.join(" | ") },
				defaultValue: { summary: "primary" },
			},
		},
		height: {
			control: "text",

			description: "When not inferring height from children, you must specify height.",
			table: {
				type: { summary: "string" },
				defaultValue: { summary: "undefined" },
			},
		},
		width: {
			control: "text",

			description: "When not inferring width from children, you must specify width.",
			table: {
				type: { summary: "string" },
				defaultValue: { summary: "undefined" },
			},
		},
	}}
/>

<Template let:args>
	<Skeleton {...args} />
</Template>

<Story name="Default" />

<Story name="Text size">
	<div class="grid w-48 gap-2">
		<Skeleton variant="text" width="100%" />

		<div style="font-size: 5rem">
			<Skeleton variant="text" width="100%" />
		</div>
	</div>
</Story>

<Story name="Children">
	<Skeleton variant="rounded">
		<TextField>
			<svelte:fragment slot="label">Email</svelte:fragment>
		</TextField>
		<Button>Send inn</Button>
	</Skeleton>
</Story>

<Story name="Card">
	<div class="card">
		<Skeleton variant="circle" width="60px" height="60px" />
		<Skeleton variant="text" width="100%" />
		<Skeleton variant="text" width="100%" />
		<Skeleton variant="text" width="100%" />
		<Skeleton variant="text" width="80%" />
	</div>
</Story>

<style>
	.card {
		box-shadow: rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 0px 0px 1px,
			rgba(0, 0, 0, 0.1) 0px 2px 4px -2px, rgba(0, 0, 0, 0.1) 0px 4px 6px -1px;
		padding: 1.5rem;
		border-radius: 0.5rem;
		width: 14rem;
	}
</style>
