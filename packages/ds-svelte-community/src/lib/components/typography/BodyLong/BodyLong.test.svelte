<script lang="ts">
	import type { ComponentProps } from "svelte";
	import BodyLong from "./BodyLong.svelte";

	type $$Props = ComponentProps<BodyLong>;
</script>

<BodyLong {...$$props}>Body long content</BodyLong>
