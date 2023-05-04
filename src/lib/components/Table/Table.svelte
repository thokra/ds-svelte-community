<script lang="ts" context="module">
	const contextKey = Symbol("TableContext");

	export const getTableContext = () => {
		const context = getContext<TableContext>(contextKey);
		if (!context) {
			throw new Error("Element must be child of Table");
		}
		return context;
	};

	export type TableContext = {
		size: "medium" | "small";
		zebraStripes: boolean;
		sort: Readable<SortState | undefined>;
		changeSort: (sortKey: string) => void;
	};

	export interface SortState {
		orderBy: string;
		direction: "ascending" | "descending";
	}
</script>

<script lang="ts">
	import { createEventDispatcher, getContext, setContext } from "svelte";
	import { writable, type Readable } from "svelte/store";
	import { classes } from "../helpers";

	/**
	 * Changes padding
	 * @default "medium"
	 */
	export let size: TableContext["size"] = "medium";
	/**
	 * Zebra striped table
	 * @default false
	 */
	export let zebraStripes = false;
	/**
	 * Sort state
	 */
	export let sort: SortState | undefined = undefined;

	let sortState = writable<SortState | undefined>(sort);
	$: sortState.set(sort);
	// /**
	//  * Callback whens sort state changes
	//  */
	// onSortChange?: (sortKey?: string) => void;

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
	{...$$restProps}
	class={classes($$restProps, "navds-table", `navds-table--${size}`)}
	class:navds-table--zebra-stripes={zebraStripes}
>
	<slot />
</table>
