<script lang="ts">
	import ArrowsUpDownIcon from "$lib/icons/ArrowsUpDownIcon.svelte";
	import ArrowUpIcon from "$lib/icons/ArrowUpIcon.svelte";
	import { classes, omit } from "../helpers";
	import { aligns, getTableContext, type TableCellProps } from "./type";

	type $$Props = TableCellProps;

	/**
	 * Content alignment inside cell.
	 */
	export let align: (typeof aligns)[number] | undefined = undefined;

	/**
	 * Key to sort by.
	 */
	export let sortKey = "";
	/**
	 * Column is sortable, adds indicators to show sorting.
	 */
	export let sortable = false;

	const ctx = getTableContext();

	if (sortable && !sortKey) {
		throw new Error("HeaderCell: sortable is true, but sortKey is not set");
	}

	const sort = ctx.sort;
</script>

<th
	{...omit($$restProps, "class")}
	class={classes($$restProps, "navds-table__header-cell", "navds-label", {
		[`navds-table__header-cell--align-${align}`]: !!align,
	})}
	class:navds-label--small={ctx.size == "small"}
	aria-sort={sortable ? ($sort?.orderBy === sortKey ? $sort.direction : "none") : undefined}
>
	{#if sortable}
		<button
			type="button"
			class="navds-table__sort-button"
			on:click={sortable && sortKey ? () => ctx.changeSort(sortKey) : undefined}
		>
			<!-- Content -->
			<slot />
			{#if $sort?.orderBy == sortKey}
				{#if $sort.direction == "ascending"}
					<ArrowUpIcon aria-hidden="true" />
				{:else}
					<ArrowsUpDownIcon aria-hidden="true" />
				{/if}
			{:else}
				<ArrowsUpDownIcon aria-hidden="true" />
			{/if}
		</button>
	{:else}
		<!-- Content -->
		<slot />
	{/if}
</th>
