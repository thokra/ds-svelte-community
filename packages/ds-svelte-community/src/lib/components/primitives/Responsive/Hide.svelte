<script lang="ts">
	import Responsive from "./Responsive.svelte";
	import type { BaseResponsiveProps } from "./type";

	let props: BaseResponsiveProps = $props();
</script>

<Responsive variant="hide" {...props} />
