<script lang="ts">
	import type { ComponentProps } from "svelte";
	import Heading from "./Heading.svelte";

	type $$Props = ComponentProps<Heading>;
</script>

<Heading {...$$props}>Heading content</Heading>
