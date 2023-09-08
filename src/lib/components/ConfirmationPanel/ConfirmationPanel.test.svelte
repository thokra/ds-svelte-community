<script lang="ts">
	import ConfirmationPanel from "./ConfirmationPanel.svelte";
	import type { Props } from "./type";

	type $$Props = Props;
</script>

<ConfirmationPanel {...$$props}>
	<svelte:fragment slot="label">Label fragment</svelte:fragment>

	Confirmation body
</ConfirmationPanel>
