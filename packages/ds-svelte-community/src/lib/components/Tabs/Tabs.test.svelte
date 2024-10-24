<script lang="ts">
	import { Tab, TabList, TabPanel, Tabs } from "./";

	interface Props {
		data: { value: string; tab: string; content: string }[];
		value: string;
	}

	let { data, value }: Props = $props();
</script>

<Tabs {value}>
	<TabList>
		{#each data as t}
			<Tab value={t.value}>{t.tab}</Tab>
		{/each}
	</TabList>

	{#each data as t}
		<TabPanel value={t.value}>{t.content}</TabPanel>
	{/each}
</Tabs>
