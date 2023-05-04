<script>
	import { Tab, TabList, TabPanel, Tabs } from "$lib/components/Tabs";
	import { EnvelopeOpen as Email, ClockDashed as Historic, Paperplane as Send } from "$lib/icons";
	import { Meta, Story, Template } from "@storybook/addon-svelte-csf";

	let active = "log";

	const x2active = "tab0";
	const x2num = 8;
	let x2wide = false;
</script>

<Meta title="ds-svelte/Tabs" component={Tabs} />

<Template>
	<div class="wrapper">
		<Tabs bind:value={active}>
			<TabList>
				<Tab value="log">Log</Tab>
				<Tab value="inbox">Inbox</Tab>
				<Tab value="sent">Sent</Tab>
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

		<Tabs bind:value={active}>
			<TabList>
				<Tab value="log">
					<Historic aria-label="Log" slot="icon" />
					Log
				</Tab>
				<Tab value="inbox">
					<Email aria-label="Inbox" slot="icon" />
					Inbox
				</Tab>
				<Tab value="sent">
					<Send aria-label="Sent" slot="icon" />
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

		<Tabs bind:value={active}>
			<TabList>
				<Tab value="log">
					<Historic aria-label="Log" slot="icon" />
				</Tab>
				<Tab value="inbox">
					<Email aria-label="Inbox" slot="icon" />
				</Tab>
				<Tab value="sent">
					<Send aria-label="Sent" slot="icon" />
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
	</div>
</Template>

<Story name="Default" />

<Story name="Scroll">
	<button
		on:click={() => {
			x2wide = !x2wide;
		}}
	>
		Toggle width {x2wide}
	</button>
	<Tabs value={x2active} style={!x2wide ? "max-width: 300px" : ""}>
		<TabList>
			{#each new Array(x2num) as _, i}
				<Tab value={`tab${i}`}>Tab{i}</Tab>
			{/each}
		</TabList>

		{#each new Array(x2num) as _, i}
			<TabPanel value={`tab${i}`}>
				<div class="examplePanelWrapper examplePanel1">Tab {i} content</div>
			</TabPanel>
		{/each}
	</Tabs>
</Story>

<Story name="Selection follows focus ">
	<Tabs value={active} loop={true} selectionFollowsFocus={true}>
		<TabList>
			<Tab value="log">Log</Tab>
			<Tab value="inbox">Inbox</Tab>
			<Tab value="sent">Sent</Tab>
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

<Story name="Icon top">
	<Tabs value={active} iconPosition="top">
		<TabList>
			<Tab value="log">
				<Historic aria-label="Log" slot="icon" />
				Log
			</Tab>
			<Tab value="inbox">
				<Email aria-label="Inbox" slot="icon" />
				Inbox
			</Tab>
			<Tab value="sent">
				<Send aria-label="Sent" slot="icon" />
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

<Story name="Small">
	<Tabs value={active} size="small">
		<TabList>
			<Tab value="log">
				<Historic aria-label="Log" slot="icon" />
				Log
			</Tab>
			<Tab value="inbox">
				<Email aria-label="Inbox" slot="icon" />
				Inbox
			</Tab>
			<Tab value="sent">
				<Send aria-label="Sent" slot="icon" />
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

	.wrapper {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}
</style>
