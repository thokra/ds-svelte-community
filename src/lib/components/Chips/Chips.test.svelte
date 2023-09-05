<script lang="ts">
	import { RemovableChip, ToggleChip } from ".";
	import Chips from "./Chips.svelte";
	import type { Props, RemovableProps } from "./type";

	export let values: string[];
	export let toggle = false;
	export let size: Props["size"] = "medium";
	export let variant: RemovableProps["variant"] = "action";
	export let selected = "";
</script>

<Chips {size}>
	{#each values as value}
		<li>
			{#if toggle}
				<ToggleChip selected={value == selected} {value}>{value}</ToggleChip>
			{:else}
				<RemovableChip {variant} {value}>{value}</RemovableChip>
			{/if}
		</li>
	{/each}
</Chips>
