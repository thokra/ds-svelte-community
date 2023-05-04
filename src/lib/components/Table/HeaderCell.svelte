<script lang="ts">
	import { ArrowDown as Down, ArrowUp as Up, ArrowsUpDown as UpDown } from "$lib/icons";
	import { classes } from "../helpers";
	import { getTableContext } from "./Table.svelte";

	/**
	 * Content alignment inside cell
	 * @default "left"
	 */
	export let align: "left" | "center" | "right" = "left";

	/**
	 * Key to sort by
	 */
	export let sortKey = "";
	/**
	 * Column is sortable, adds indicators to show sorting
	 * @default false
	 */
	export let sortable = false;

	const ctx = getTableContext();

	if (sortable && !sortKey) {
		throw new Error("HeaderCell: sortable is true, but sortKey is not set");
	}

	const sort = ctx.sort;
</script>

<th
	{...$$restProps}
	class={classes(
		$$restProps,
		"navds-table__header-cell",
		"navds-label",
		`navds-table__header-cell--align-${align}`,
	)}
	class:navds-label--small={ctx.size == "small"}
	aria-sort={sortable ? ($sort?.orderBy === sortKey ? $sort.direction : "none") : undefined}
>
	{#if sortable}
		<button
			type="button"
			class="navds-table__sort-button"
			on:click={sortable && sortKey ? () => ctx.changeSort(sortKey) : undefined}
		>
			<slot />
			{#if $sort?.orderBy == sortKey}
				{#if $sort.direction == "ascending"}
					<Up aria-hidden="true" />
				{:else}
					<Down aria-hidden="true" />
				{/if}
			{:else}
				<UpDown aria-hidden="true" />
			{/if}
		</button>
	{:else}
		<slot />
	{/if}
</th>
