import { getContext, type Snippet } from "svelte";

export const tableSizes = ["medium", "small"] as const;
export const directions = ["ascending", "descending"] as const;
export const aligns = ["left", "center", "right"] as const;
export const contextKey = Symbol("TableContext");

export const getTableContext = () => {
	const context = getContext<TableContext>(contextKey);
	if (!context) {
		throw new Error("Element must be child of Table");
	}
	return context;
};

export class TableContext {
	size?: (typeof tableSizes)[number] = $state();
	zebraStripes?: boolean = $state();
	sort?: TableSortState = $state();
	changeSort?: (sortKey: string) => void;
}

export interface TableProps {
	/**
	 * Changes padding.
	 */
	size?: (typeof tableSizes)[number];
	/**
	 * Zebra striped table.
	 */
	zebraStripes?: boolean;
	/**
	 * Sort state.
	 */
	sort?: TableSortState;
	/**
	 * Table contents.
	 */
	children: Snippet;

	/**
	 * Callback for sort change.
	 */
	onSortChange?: (sortKey: string) => void;

	[key: string]: unknown;
}

export interface TableRowProps {
	/**
	 * Highlight row as selected.
	 */
	selected?: boolean;
	/**
	 * Shade row on hover.
	 */
	shadeOnHover?: boolean;
	/**
	 * Row contents.
	 */
	children: Snippet;

	[key: string]: unknown;
}

export interface TableCellProps {
	/**
	 * Cell alignment.
	 */
	align?: (typeof aligns)[number];
	/**
	 * Key for sorting.
	 */
	sortKey?: string;
	/**
	 * Whether cell is sortable.
	 */
	sortable?: boolean;
	/**
	 * Cell contents.
	 */
	children: Snippet;

	[key: string]: unknown;
}

export interface HeaderProps {
	/**
	 * Table header contents.
	 */
	children: Snippet;

	[key: string]: unknown;
}

export interface DataCellProps {
	/**
	 * Cell alignment.
	 */
	align?: (typeof aligns)[number];

	/**
	 * Data cell contents.
	 */
	children: Snippet;

	[key: string]: unknown;
}

export interface BodyProps {
	/**
	 * Table body contents.
	 */
	children: Snippet;

	[key: string]: unknown;
}

export interface TableSortState {
	orderBy: string;
	direction: (typeof directions)[number];
}
