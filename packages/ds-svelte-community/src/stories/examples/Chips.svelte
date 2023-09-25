<script lang="ts">
	import { Chips, RemovableChip } from "$lib";

	let values = [
		{ name: "Norwegian" },
		{ name: "Danish" },
		{ name: "Swedish" },
		{ name: "German" },
		{ name: "Spanish" },
	];
</script>

<Chips>
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
