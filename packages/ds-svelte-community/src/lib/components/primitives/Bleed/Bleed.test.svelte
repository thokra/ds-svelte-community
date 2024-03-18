<script lang="ts">
	import Bleed from "./Bleed.svelte";
	import type { BleedProps } from "./type";

	type $$Props = BleedProps;
</script>

<Bleed {...$$props}>Bleed body</Bleed>
