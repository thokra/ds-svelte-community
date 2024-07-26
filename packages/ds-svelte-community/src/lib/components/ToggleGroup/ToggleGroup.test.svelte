<script lang="ts">
	import { ToggleGroup, ToggleGroupItem } from ".";
	import type { ToggleGroupProps } from "./type.svelte";

	type Props = ToggleGroupProps & {
		value: string;
		items: string[];
	};

	let { value, items }: Props = $props();
</script>

<ToggleGroup {value}>
	{#each items as item}
		<ToggleGroupItem value={item}>{item}</ToggleGroupItem>
	{/each}
</ToggleGroup>
