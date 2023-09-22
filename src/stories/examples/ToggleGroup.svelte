<script lang="ts">
	import { ToggleGroup, ToggleGroupItem } from "$lib";
	import EnvelopeClosedIcon from "$lib/icons/EnvelopeClosedIcon.svelte";
	import EnvelopeOpenIcon from "$lib/icons/EnvelopeOpenIcon.svelte";
	import PaperplaneIcon from "$lib/icons/PaperplaneIcon.svelte";

	let value = "read";
</script>

<ToggleGroup bind:value>
	<ToggleGroupItem value="unread"><EnvelopeClosedIcon aria-hidden /> Unread</ToggleGroupItem>
	<ToggleGroupItem value="read"><EnvelopeOpenIcon aria-hidden /> Read</ToggleGroupItem>
	<ToggleGroupItem value="sent"><PaperplaneIcon aria-hidden /> Sent</ToggleGroupItem>
</ToggleGroup>
