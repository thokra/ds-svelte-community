<script lang="ts">
	import Bleed from "./Bleed.svelte";
	import type { BleedProps } from "./type";

	let props: Omit<BleedProps, "children"> = $props();
</script>

<Bleed {...props}>Bleed body</Bleed>
