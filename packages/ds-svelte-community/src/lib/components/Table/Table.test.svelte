<script lang="ts">
	import { Table, Tbody, Td, Th, Thead, Tr } from ".";

	export let data: Record<string, string>[];
</script>

<Table>
	<Thead>
		<Tr>
			{#each Object.keys(data[0]) as key}
				<Th scope="col">{key}</Th>
			{/each}
		</Tr>
	</Thead>

	<Tbody>
		{#each data as row}
			<Tr>
				{#each Object.keys(row) as key, index}
					{#if index === 0}
						<Th scope="row">{row[key]}</Th>
					{:else}
						<Td>{row[key]}</Td>
					{/if}
				{/each}
			</Tr>
		{/each}
	</Tbody>
</Table>
