<script>
	import { Chips, RemovableChip, ToggleChip } from "$lib/components/Chips";
	import { sizes } from "$lib/components/Chips/type";
	// eslint-disable-next-line
	// @ts-ignore
	import { Meta, Story, Template } from "@storybook/addon-svelte-csf";
	import source from "./examples/Chips.svelte?raw";

	let values = [
		{ name: "Norwegian", selected: true },
		{ name: "Danish", selected: false },
		{ name: "Swedish", selected: false },
		{ name: "German", selected: true },
		{ name: "Spanish", selected: false },
	];
</script>

<Meta
	title="components/Chips"
	component={Chips}
	argTypes={{
		size: {
			control: "select",
			options: sizes,

			description: "The variant of the accordion.",
			table: {
				type: { summary: sizes.join(" | ") },
			},
		},
	}}
/>

<Template let:args>
	<Chips {...args}>
		{#each values as value}
			<li>
				<RemovableChip
					value={value.name}
					on:delete={() => {
						values = values.filter((v) => v !== value);
					}}
				/>
			</li>
		{/each}
	</Chips>
</Template>

<Story name="Default" {source} />
<Story name="Small" args={{ size: "small" }} />

<Story name="Checked">
	<div class="colspan">
		<Chips>
			{#each values as value}
				<ToggleChip
					value={value.name}
					selected={value.selected}
					on:click={() => {
						value.selected = !value.selected;
					}}
				>
					{value.name}
				</ToggleChip>
			{/each}
		</Chips>

		<Chips size="small">
			{#each values as value}
				<ToggleChip
					value={value.name}
					selected={value.selected}
					on:click={() => {
						value.selected = !value.selected;
					}}
				>
					{value.name}
				</ToggleChip>
			{/each}
		</Chips>
	</div>
</Story>

<style>
	.colspan {
		display: flex;
		flex-direction: column;
		gap: 2rem;
	}
</style>
