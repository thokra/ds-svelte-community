<script lang="ts">
	import { createEventDispatcher, setContext } from "svelte";
	import { writable } from "svelte/store";
	import { classes, omit } from "../helpers";
	import type { TableSortState } from "./type";
	import { contextKey, type TableContext, type TableProps, type tableSizes } from "./type";

	type $$Props = TableProps;

	/**
	 * Changes padding.
	 * @default "medium"
	 */
	export let size: (typeof tableSizes)[number] = "medium";
	/**
	 * Zebra striped table.
	 * @default false
	 */
	export let zebraStripes = false;
	/**
	 * Sort state.
	 */
	export let sort: TableSortState | undefined = undefined;

	let sortState = writable<TableSortState | undefined>(sort);
	$: sortState.set(sort);

	const sortDispatch = createEventDispatcher<{
		sortChange: { key: string };
	}>();

	setContext<TableContext>(contextKey, {
		size,
		zebraStripes,
		sort: sortState,
		changeSort: (sortKey: string) => {
			sortDispatch("sortChange", { key: sortKey });
		},
	});
</script>

<table
	{...omit($$restProps, "class")}
	class={classes($$restProps, "navds-table", `navds-table--${size}`)}
	class:navds-table--zebra-stripes={zebraStripes}
>
	<!-- Content -->
	<slot />
</table>
