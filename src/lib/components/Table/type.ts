import { getContext } from "svelte";
import type {
	HTMLAttributes,
	HTMLTableAttributes,
	HTMLTdAttributes,
	HTMLThAttributes,
} from "svelte/elements";
import type { Readable } from "svelte/store";
import type { SortState } from ".";

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

export type TableContext = {
	size: (typeof tableSizes)[number];
	zebraStripes: boolean;
	sort: Readable<SortState | undefined>;
	changeSort: (sortKey: string) => void;
};

export interface TableProps extends HTMLTableAttributes {
	size?: (typeof tableSizes)[number];
	zebraStripes?: boolean;
	sort?: SortState;
}

export interface TableRowProps extends HTMLAttributes<HTMLTableRowElement> {
	selected?: boolean;
	shadeOnHover?: boolean;
}

export interface TableCellProps extends Omit<HTMLThAttributes, "align"> {
	align?: (typeof aligns)[number];
	sortKey?: string;
	sortable?: boolean;
}

export type HeaderProps = HTMLAttributes<HTMLTableSectionElement>;

export interface DataCellProps extends Omit<HTMLTdAttributes, "align"> {
	align?: (typeof aligns)[number];
}

export type BodyProps = HTMLAttributes<HTMLTableSectionElement>;
