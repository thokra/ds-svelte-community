<script lang="ts">
	import Stack from "./Stack.svelte";
	import type { StackProps } from "./type";

	type $$Props = Omit<StackProps, "direction">;
</script>

<Stack {...$$props} direction="row">
	<slot />
</Stack>
