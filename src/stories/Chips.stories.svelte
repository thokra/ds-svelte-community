<script>
	import { Chips, Removable, Toggle } from "$lib/components/Chips";
	import { Meta, Story, Template } from "@storybook/addon-svelte-csf";

	let values = [
		{ name: "Norwegian", selected: true },
		{ name: "Danish", selected: false },
		{ name: "Swedish", selected: false },
		{ name: "German", selected: true },
		{ name: "Spanish", selected: false },
	];
</script>

<Meta title="ds-svelte/Chips" component={Chips} />

<Template let:args>
	<Chips {...args}>
		{#each values as value}
			<li>
				<Removable
					value={value.name}
					on:delete={() => {
						values = values.filter((v) => v !== value);
					}}
				/>
			</li>
		{/each}
	</Chips>
</Template>

<Story name="Default" />
<Story name="Small" args={{ size: "small" }} />

<Story name="Checked">
	<div class="colspan">
		<Chips>
			{#each values as value}
				<Toggle
					value={value.name}
					selected={value.selected}
					on:click={() => {
						value.selected = !value.selected;
					}}
				>
					{value.name}
				</Toggle>
			{/each}
		</Chips>

		<Chips size="small">
			{#each values as value}
				<Toggle
					value={value.name}
					selected={value.selected}
					on:click={() => {
						value.selected = !value.selected;
					}}
				>
					{value.name}
				</Toggle>
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
