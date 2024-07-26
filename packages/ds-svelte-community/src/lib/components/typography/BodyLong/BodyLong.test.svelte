<script lang="ts">
	import type { ComponentProps } from "svelte";
	import BodyLong from "./BodyLong.svelte";

	let props: Omit<ComponentProps<BodyLong>, "children"> = $props();
</script>

<BodyLong {...props}>Body long content</BodyLong>
