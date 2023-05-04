<script lang="ts">
	import TextField from "$lib/components/TextField.svelte";
	import { Meta, Story, Template } from "@storybook/addon-svelte-csf";

	let types: ("number" | "email" | "password" | "tel" | "text" | "url")[] = [
		"number",
		"email",
		"password",
		"tel",
		"text",
		"url",
	];

	let errorValue = "";
</script>

<Meta title="ds-svelte/TextField" component={TextField} />

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

<Story name="Default" />

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
