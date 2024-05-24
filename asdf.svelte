<script lang="ts">
	import { Button } from "@nais/ds-svelte-community";

	let clicks = $state(0);
</script>

<Button
	onclick={() => (clicks += 1)}
	variant="tertiary"
	{...docProps}
>
	Clicked {clicks} times
</Button>
