<script lang="ts">
	import Hide from "./Hide.svelte";
	import type { BaseResponsiveProps } from "./type";

	let props: Omit<BaseResponsiveProps, "children"> = $props();
</script>

<Hide {...props}>body</Hide>
