<script lang="ts">
	import Hide from "./Hide.svelte";
	import type { BaseResponsiveProps } from "./type";

	type $$Props = BaseResponsiveProps;
</script>

<Hide {...$$props}>body</Hide>
