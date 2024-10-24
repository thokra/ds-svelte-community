<script lang="ts">
	import { RemovableChip, ToggleChip } from ".";
	import Chips from "./Chips.svelte";
	import type { Props, RemovableProps } from "./type";

	interface Props_1 {
		values: string[];
		toggle?: boolean;
		size?: Props["size"];
		variant?: RemovableProps["variant"];
		selected?: string;
	}

	let {
		values,
		toggle = false,
		size = "medium",
		variant = "action",
		selected = "",
	}: Props_1 = $props();
</script>

<Chips {size}>
	{#each values as value}
		<li>
			{#if toggle}
				<ToggleChip selected={value == selected} {value}>{value}</ToggleChip>
			{:else}
				<RemovableChip removeLabel="slett" {variant} {value}>{value}</RemovableChip>
			{/if}
		</li>
	{/each}
</Chips>
