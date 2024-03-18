<script lang="ts">
	import Show from "./Show.svelte";
	import type { BaseResponsiveProps } from "./type";

	type $$Props = BaseResponsiveProps;
</script>

<Show {...$$props}>body</Show>
