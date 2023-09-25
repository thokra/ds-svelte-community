<script lang="ts">
	import Panel from "./Panel.svelte";
	import type { Props } from "./type";

	type $$Props = Props;
</script>

<Panel {...$$props}>Panel body</Panel>
