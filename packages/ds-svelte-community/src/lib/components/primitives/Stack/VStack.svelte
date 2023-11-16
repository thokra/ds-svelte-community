<script lang="ts">
	import Stack from "./Stack.svelte";
	import type { StackProps } from "./type";

	type $$Props = Omit<StackProps, "direction" | "wrap">;
</script>

<Stack {...$$props} direction="column" wrap={false}>
	<slot />
</Stack>
