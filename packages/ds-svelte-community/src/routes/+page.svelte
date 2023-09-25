<script lang="ts">
	import { Tab, TabList, TabPanel, Tabs } from "$lib";

	export let value: string;
</script>

<Tabs {value}>
	<TabList>
		<Tab value="a">a</Tab>
	</TabList>

	<TabPanel value="a">t.content</TabPanel>
</Tabs>
