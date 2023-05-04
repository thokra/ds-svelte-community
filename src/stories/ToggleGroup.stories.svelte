<script>
	import { Meta, Story, Template } from "@storybook/addon-svelte-csf";

	import { ToggleGroup, ToggleGroupItem } from "$lib/components/ToggleGroup";
	import {
		EnvelopeOpen as EmailOpened,
		EnvelopeClosed as Email,
		Paperplane as Send,
	} from "$lib/icons";

	let value = "unread";
</script>

<Meta title="ds-svelte/ToggleGroup" component={ToggleGroup} />

<Template let:args>
	<div class="colgap">
		<ToggleGroup {...args} bind:value>
			<ToggleGroupItem value="unread">Unread</ToggleGroupItem>
			<ToggleGroupItem value="read">Read</ToggleGroupItem>
			<ToggleGroupItem value="sent">Sent</ToggleGroupItem>
		</ToggleGroup>

		<ToggleGroup {...args} bind:value>
			<ToggleGroupItem value="unread"><Email aria-hidden /> Unread</ToggleGroupItem>
			<ToggleGroupItem value="read"><EmailOpened aria-hidden /> Read</ToggleGroupItem>
			<ToggleGroupItem value="sent"><Send aria-hidden /> Sent</ToggleGroupItem>
		</ToggleGroup>

		<ToggleGroup {...args} bind:value>
			<ToggleGroupItem value="unread"><Email aria-label="Unread" /></ToggleGroupItem>
			<ToggleGroupItem value="read"><EmailOpened aria-label="Read" /></ToggleGroupItem>
			<ToggleGroupItem value="sent"><Send aria-label="Sent" /></ToggleGroupItem>
		</ToggleGroup>
	</div>
</Template>

<Story name="Default" />

<Story name="Neutral" args={{ variant: "neutral" }} />
<Story name="Small" args={{ size: "small" }} />
<Story name="Label" args={{ label: "Inbox" }} />

<style>
	.colgap {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}
</style>
