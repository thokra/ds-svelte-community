<script lang="ts">
	import { Body, DataCell, Header, HeaderCell, Row, Table } from "$lib/components/Table";
	import { Meta, Story, Template } from "@storybook/addon-svelte-csf";
	import type { SortState } from "$lib/components/Table/Table.svelte";

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

	let sortState: SortState | undefined = undefined;

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

<Meta title="ds-svelte/Table" component={Table} />

<Template let:args>
	<Table {...args}>
		<Header>
			{#each Object.keys(data[0]) as key}
				<HeaderCell scope="col">{key[0].toUpperCase() + key.slice(1)}</HeaderCell>
			{/each}
		</Header>

		<Body>
			{#each data as row}
				<Row>
					<HeaderCell scope="row">{row.name}</HeaderCell>
					<DataCell>{row.phone}</DataCell>
					<DataCell>{row.expiry}</DataCell>
				</Row>
			{/each}
		</Body>
	</Table>
</Template>

<Story name="Default" />

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
		<Header>
			{#each Object.keys(data[0]) as key}
				<HeaderCell scope="col" sortable={true} sortKey={key}>
					{key[0].toUpperCase() + key.slice(1)}
				</HeaderCell>
			{/each}
		</Header>

		<Body>
			{#each orderedData as row}
				<Row>
					<HeaderCell scope="row">{row.name}</HeaderCell>
					<DataCell>{row.phone}</DataCell>
					<DataCell>{row.expiry}</DataCell>
				</Row>
			{/each}
		</Body>
	</Table>
</Story>
