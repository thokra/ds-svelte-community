<script lang="ts">
	import doc from "$lib/components/Chips/Chips.svelte?doc";
	import removableDoc from "$lib/components/Chips/RemovableChip.svelte?doc";
	import toggleDoc from "$lib/components/Chips/ToggleChip.svelte?doc";

	import Doc from "$doclib/Doc.svelte";
	import Story from "$doclib/Story.svelte";
	import { Chips, RemovableChip, ToggleChip } from "$lib";

	let values = $state([
		{ name: "Norwegian" },
		{ name: "Danish" },
		{ name: "Swedish" },
		{ name: "German" },
		{ name: "Spanish" },
	]);

	let toggleValues = $state([
		{ name: "Name", selected: true },
		{ name: "Date", selected: false },
		{ name: "Size", selected: true },
		{ name: "Type", selected: false },
		{ name: "Status", selected: false },
	]);
</script>

<Doc {doc} extraChildrenDoc={[toggleDoc, removableDoc]}>
	<Story>
		<Chips>
			{#each values as value}
				<li>
					<RemovableChip
						value={value.name}
						ondelete={() => {
							values = values.filter((v) => v !== value);
						}}
					/>
				</li>
			{/each}
		</Chips>
	</Story>

	<Story name="ToggleChips">
		<Chips>
			{#each toggleValues as value}
				<ToggleChip value={value.name} bind:selected={value.selected}>
					{value.name}
				</ToggleChip>
			{/each}
		</Chips>
	</Story>
</Doc>
