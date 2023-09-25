<script lang="ts">
	import { Tab, TabList, TabPanel, Tabs } from "./";

	export let data: { value: string; tab: string; content: string }[];
	export let value: string;
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
