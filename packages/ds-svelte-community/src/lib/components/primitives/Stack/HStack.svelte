<script lang="ts">
	import Stack from "./Stack.svelte";
	import type { StackProps } from "./type";

	type $$Props = StackProps;
</script>

<Stack {...$$props} direction="row">
	<slot />
</Stack>
