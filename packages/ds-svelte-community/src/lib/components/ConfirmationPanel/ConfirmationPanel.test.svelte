<script lang="ts">
	import ConfirmationPanel from "./ConfirmationPanel.svelte";
	import type { Props } from "./type";

	let props: Omit<Omit<Props, "label">, "children"> = $props();
</script>

<ConfirmationPanel {...props}>
	{#snippet label()}
		Label fragment
	{/snippet}

	Confirmation body
</ConfirmationPanel>
