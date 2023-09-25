<script lang="ts">
	import { ToggleGroup, ToggleGroupItem } from ".";
	import type { ToggleGroupProps } from "./type";

	export let value: string;
	export let items: string[];

	type $$Props = ToggleGroupProps & {
		value: string;
		items: string[];
	};
</script>

<ToggleGroup {value}>
	{#each items as item}
		<ToggleGroupItem value={item}>{item}</ToggleGroupItem>
	{/each}
</ToggleGroup>
