<script lang="ts">
	import type { ComponentProps } from "svelte";
	import Detail from "./Detail.svelte";

	type $$Props = ComponentProps<Detail>;
</script>

<Detail {...$$props}>Detail content</Detail>
