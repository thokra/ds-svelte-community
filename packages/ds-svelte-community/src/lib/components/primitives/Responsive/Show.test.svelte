<script lang="ts">
	import Show from "./Show.svelte";
	import type { BaseResponsiveProps } from "./type";

	let props: Omit<BaseResponsiveProps, "children"> = $props();
</script>

<Show {...props}>body</Show>
