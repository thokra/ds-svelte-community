<script lang="ts">
	import TextField from "./TextField.svelte";
	import type { Props } from "./type";

	type $$Props = Props;
</script>

<TextField {...$$props}>
	<svelte:fragment slot="label">Some label</svelte:fragment>
	<svelte:fragment slot="description">Some longer description</svelte:fragment>
</TextField>
