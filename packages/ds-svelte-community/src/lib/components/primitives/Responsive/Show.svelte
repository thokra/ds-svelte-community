<script lang="ts">
	import Responsive from "./Responsive.svelte";
	import type { BaseResponsiveProps } from "./type";

	type $$Props = BaseResponsiveProps;
</script>

<Responsive variant="show" {...$$props}><slot /></Responsive>
