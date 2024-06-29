<script lang="ts">
	import tabDoc from "$lib/components/Tabs/Tab.svelte?doc";
	import tabListDoc from "$lib/components/Tabs/TabList.svelte?doc";
	import tabPanelDoc from "$lib/components/Tabs/TabPanel.svelte?doc";
	import doc from "$lib/components/Tabs/Tabs.svelte?doc";

	import Doc from "$doclib/Doc.svelte";
	import Story from "$doclib/Story.svelte";
	import { Tab, TabList, TabPanel, Tabs } from "$lib";
	import { ClockDashedIcon, EnvelopeOpenIcon, PaperplaneIcon } from "$lib/icons";

	let active = $state("inbox");
</script>

<Doc {doc} extraChildrenDoc={[tabListDoc, tabDoc, tabPanelDoc]} preview={{ width: "400px" }}>
	<Story>
		<Tabs bind:value={active}>
			<TabList>
				<Tab value="log">
					{#snippet icon()}<ClockDashedIcon aria-label="Log" />{/snippet}
					Log
				</Tab>
				<Tab value="inbox">
					{#snippet icon()}<EnvelopeOpenIcon aria-label="Inbox" />{/snippet}
					Inbox
				</Tab>
				<Tab value="sent">
					{#snippet icon()}<PaperplaneIcon aria-label="Sent" />{/snippet}
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
	</Story>
</Doc>

<style>
	.examplePanelWrapper {
		height: 100px;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.examplePanel1 {
		background-color: var(--a-gray-50);
	}

	.examplePanel2 {
		background-color: var(--a-green-50);
	}

	.examplePanel3 {
		background-color: var(--a-red-50);
	}
</style>
