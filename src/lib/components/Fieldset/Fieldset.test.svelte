<script lang="ts">
	import Fieldset from "./Fieldset.svelte";
	import type { FieldsetProps } from "./type";

	type $$Props = FieldsetProps;
</script>

<Fieldset {...$$props}>
	<svelte:fragment slot="legend">Legend</svelte:fragment>
	<svelte:fragment slot="description">Description</svelte:fragment>
	Fieldset body
</Fieldset>
