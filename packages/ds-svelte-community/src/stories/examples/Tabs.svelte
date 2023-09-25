<script lang="ts">
	import { Tab, TabList, TabPanel, Tabs } from "$lib";
	import ClockDashedIcon from "$lib/icons/ClockDashedIcon.svelte";
	import EnvelopeOpenIcon from "$lib/icons/EnvelopeOpenIcon.svelte";
	import PaperplaneIcon from "$lib/icons/PaperplaneIcon.svelte";

	export let active = "inbox";
</script>

<Tabs bind:value={active}>
	<TabList>
		<Tab value="log">
			<ClockDashedIcon aria-label="Log" slot="icon" />
			Log
		</Tab>
		<Tab value="inbox">
			<EnvelopeOpenIcon aria-label="Inbox" slot="icon" />
			Inbox
		</Tab>
		<Tab value="sent">
			<PaperplaneIcon aria-label="Sent" slot="icon" />
			Sent
		</Tab>
	</TabList>

	<TabPanel value="log">
		<div class="examplePanelWrapper examplePanel1">Log content</div>
	</TabPanel>
	<TabPanel value="inbox">
		<div class="examplePanelWrapper examplePanel2">Inbox content</div>
	</TabPanel>
	<TabPanel value="sent">
		<div class="examplePanelWrapper examplePanel3">Sent content</div>
	</TabPanel>
</Tabs>
