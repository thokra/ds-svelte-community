<script lang="ts" module>
	import type { ToggleGroupProps } from "./type.svelte";
	export type ToggleGroupTestProps = Omit<ToggleGroupProps, "children"> & {
		value: string;
		items: string[];
	};
</script>

<script lang="ts">
	import { ToggleGroup, ToggleGroupItem } from ".";

	let { value, items }: ToggleGroupTestProps = $props();
</script>

<ToggleGroup {value}>
	{#each items as item}
		<ToggleGroupItem value={item}>{item}</ToggleGroupItem>
	{/each}
</ToggleGroup>
