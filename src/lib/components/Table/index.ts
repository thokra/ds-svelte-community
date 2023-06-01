import type { directions } from "./type";

export { default as Tbody } from "./Body.svelte";
export { default as Td } from "./DataCell.svelte";
export { default as Thead } from "./Header.svelte";
export { default as Th } from "./HeaderCell.svelte";
export { default as Tr } from "./Row.svelte";
export { default as Table } from "./Table.svelte";

export interface SortState {
	orderBy: string;
	direction: (typeof directions)[number];
}
