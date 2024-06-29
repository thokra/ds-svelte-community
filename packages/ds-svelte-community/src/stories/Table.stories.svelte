<script lang="ts">
	import { Table, Tbody, Td, Th, Thead, Tr, type TableSortState } from "$lib";
	import { tableSizes } from "$lib/components/Table/type.svelte";
	// eslint-disable-next-line
	// @ts-ignore
	import { Meta, Story, Template } from "@storybook/addon-svelte-csf";
	import source from "./examples/Table.svelte?raw";

	const data = [
		{
			name: "Jakobsen, Markus",
			phone: "555 555 5555",
			expiry: "28.04.2021",
		},
		{
			name: "Halvorsen, Mari",
			phone: "555 432 5555",
			expiry: "29.01.2022",
		},
		{
			name: "Christiansen, Mathias",
			phone: "555 123 5555",
			expiry: "04.06.2021",
		},
		{
			name: "Fredriksen, Leah",
			phone: "555 345 1234",
			expiry: "31.08.2021",
		},
		{
			name: "Evensen, Jonas",
			phone: "555 123 4321",
			expiry: "17.07.2021",
		},
	];

	let sortState: TableSortState | undefined = undefined;

	const orderData = () => {
		if (!sortState || sortState === undefined) {
			return data;
		}

		const ss = sortState;

		return [...data].sort((a, b) => {
			if (ss.direction === "ascending") {
				return a[ss.orderBy as keyof typeof a] > b[ss.orderBy as keyof typeof b] ? 1 : -1;
			} else {
				return a[ss.orderBy as keyof typeof a] < b[ss.orderBy as keyof typeof b] ? 1 : -1;
			}
		});
	};

	let orderedData = orderData();
</script>

<Meta
	title="components/Table"
	component={Table}
	argTypes={{
		size: {
			control: "select",
			options: tableSizes,
			description: "Changes padding.",
		},
		zebraStripes: {
			control: "boolean",
			description: "Zebra striped table.",
		},
		sort: {
			control: "none",
			description: "Sort state.",
			table: {
				type: { summary: "SortState" },
			},
		},
	}}
/>

<Template let:args>
	<Table {...args}>
		<Thead>
			{#each Object.keys(data[0]) as key}
				<Th scope="col">{key[0].toUpperCase() + key.slice(1)}</Th>
			{/each}
		</Thead>

		<Tbody>
			{#each data as row}
				<Tr>
					<Th scope="row">{row.name}</Th>
					<Td>{row.phone}</Td>
					<Td>{row.expiry}</Td>
				</Tr>
			{/each}
		</Tbody>
	</Table>
</Template>

<Story name="Default" {source} />

<Story name="Small" args={{ size: "small" }} />

<Story name="Zebra stripes" args={{ zebraStripes: true }} />

<Story name="Sortable">
	<Table
		sort={sortState}
		on:sortChange={(e) => {
			const { key } = e.detail;
			if (!sortState) {
				sortState = {
					orderBy: key,
					direction: "ascending",
				};
			} else if (sortState.orderBy === key) {
				if (sortState.direction === "descending") {
					sortState = undefined;
				} else if (sortState.direction === "ascending") {
					sortState.direction = "descending";
				} else {
					sortState.direction = "ascending";
				}
			} else {
				sortState.orderBy = key;
				sortState.direction = "ascending";
			}
			orderedData = orderData();
		}}
	>
		<Thead>
			{#each Object.keys(data[0]) as key}
				<Th scope="col" sortable={true} sortKey={key}>
					{key[0].toUpperCase() + key.slice(1)}
				</Th>
			{/each}
		</Thead>

		<Tbody>
			{#each orderedData as row}
				<Tr>
					<Th scope="row">{row.name}</Th>
					<Td>{row.phone}</Td>
					<Td>{row.expiry}</Td>
				</Tr>
			{/each}
		</Tbody>
	</Table>
</Story>
