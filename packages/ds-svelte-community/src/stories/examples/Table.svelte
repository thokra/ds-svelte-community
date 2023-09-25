<script lang="ts">
	import { Table, Tbody, Td, Th, Thead, Tr } from "$lib";

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
</script>

<Table>
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
