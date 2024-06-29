<script lang="ts">
	import { setContext } from "svelte";
	import { classes, omit } from "../helpers";
	import { TableContext, contextKey, type TableProps } from "./type.svelte";

	// type $$Props = TableProps;

	// /**
	//  * Changes padding.
	//  * @default "medium"
	//  */
	// export let size: (typeof tableSizes)[number] = "medium";
	// /**
	//  * Zebra striped table.
	//  * @default false
	//  */
	// export let zebraStripes = false;
	// /**
	//  * Sort state.
	//  */
	// export let sort: TableSortState | undefined = undefined;

	let {
		size = "medium",
		zebraStripes = false,
		sort,
		children,
		onSortChange,
		...restProps
	}: TableProps = $props();

	const ctx = new TableContext();

	$effect(() => {
		ctx.size = size;
		ctx.zebraStripes = zebraStripes;
		ctx.changeSort = onSortChange;
		ctx.sort = sort;
	});

	// let sortState = writable<TableSortState | undefined>(sort);
	// $: sortState.set(sort);

	// const sortDispatch = createEventDispatcher<{
	// 	sortChange: { key: string };
	// }>();

	setContext<TableContext>(contextKey, ctx);
</script>

<table
	{...omit(restProps, "class")}
	class={classes(restProps, "navds-table", `navds-table--${size}`)}
	class:navds-table--zebra-stripes={zebraStripes}
>
	<!-- Content -->
	{@render children()}
</table>
