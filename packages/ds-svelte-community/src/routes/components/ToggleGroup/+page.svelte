<script lang="ts">
	import doc from "$lib/components/ToggleGroup/ToggleGroup.svelte?doc";
	import itemDoc from "$lib/components/ToggleGroup/ToggleGroupItem.svelte?doc";

	import Doc from "$doclib/Doc.svelte";
	import Story from "$doclib/Story.svelte";
	import { ToggleGroup, ToggleGroupItem } from "$lib";
	import { EnvelopeClosedIcon, EnvelopeOpenIcon, PaperplaneIcon } from "$lib/icons";

	let value = $state("read");
</script>

<Doc {doc} extraChildrenDoc={[itemDoc]}>
	<Story>
		<ToggleGroup bind:value>
			<ToggleGroupItem value="unread">Unread</ToggleGroupItem>
			<ToggleGroupItem value="read">Read</ToggleGroupItem>
			<ToggleGroupItem value="sent">Sent</ToggleGroupItem>
		</ToggleGroup>
	</Story>
	<Story name="With icons">
		<ToggleGroup bind:value>
			<ToggleGroupItem value="unread"><EnvelopeClosedIcon aria-hidden /> Unread</ToggleGroupItem>
			<ToggleGroupItem value="read"><EnvelopeOpenIcon aria-hidden /> Read</ToggleGroupItem>
			<ToggleGroupItem value="sent"><PaperplaneIcon aria-hidden /> Sent</ToggleGroupItem>
		</ToggleGroup>
	</Story>
	<Story name="Only icons">
		<ToggleGroup bind:value>
			<ToggleGroupItem value="unread"><EnvelopeClosedIcon aria-label="Unread" /></ToggleGroupItem>
			<ToggleGroupItem value="read"><EnvelopeOpenIcon aria-label="Read" /></ToggleGroupItem>
			<ToggleGroupItem value="sent"><PaperplaneIcon aria-label="Sent" /></ToggleGroupItem>
		</ToggleGroup>
	</Story>
</Doc>
