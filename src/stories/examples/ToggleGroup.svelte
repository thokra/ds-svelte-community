<script lang="ts">
	import { ToggleGroup, ToggleGroupItem } from "$lib";
	import { EnvelopeClosed, EnvelopeOpen, Paperplane } from "$lib/icons";

	let value = "read";
</script>

<ToggleGroup bind:value>
	<ToggleGroupItem value="unread"><EnvelopeClosed aria-hidden /> Unread</ToggleGroupItem>
	<ToggleGroupItem value="read"><EnvelopeOpen aria-hidden /> Read</ToggleGroupItem>
	<ToggleGroupItem value="sent"><Paperplane aria-hidden /> Sent</ToggleGroupItem>
</ToggleGroup>
