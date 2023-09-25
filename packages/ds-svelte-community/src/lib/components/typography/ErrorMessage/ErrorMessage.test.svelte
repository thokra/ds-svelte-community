<script lang="ts">
	import type { ComponentProps } from "svelte";
	import ErrorMessage from "./ErrorMessage.svelte";

	type $$Props = ComponentProps<ErrorMessage>;
</script>

<ErrorMessage {...$$props}>ErrorMessage content</ErrorMessage>
