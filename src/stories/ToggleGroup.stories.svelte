<script>
	// eslint-disable-next-line
	// @ts-ignore
	import { Meta, Story, Template } from "@storybook/addon-svelte-csf";

	import { ToggleGroup, ToggleGroupItem } from "$lib/components/ToggleGroup";
	import { sizes, variants } from "$lib/components/ToggleGroup/type";
	import {
		EnvelopeClosed as Email,
		EnvelopeOpen as EmailOpened,
		Paperplane as Send,
	} from "$lib/icons";
	import source from "./examples/ToggleGroup.svelte?raw";

	let value = "unread";
</script>

<Meta
	title="components/ToggleGroup"
	component={ToggleGroup}
	argTypes={{
		size: {
			control: "select",
			options: sizes,
			table: { type: { summary: sizes.join(" | ") } },
			description: "Changes padding and font-size.",
		},
		value: {
			control: "text",
			type: { name: "string", required: true },
			table: { type: { summary: "string" } },
			description: "Controlled selected value.",
		},
		label: {
			control: "text",
			table: { type: { summary: "string" } },
			description: "Label describing ToggleGroup.",
		},
		variant: {
			control: "select",
			options: variants,
			table: { type: { summary: variants.join(" | ") } },
			description: "Changes design and interaction-visuals.",
		},
	}}
/>

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

<Story name="Default" {source} />

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
