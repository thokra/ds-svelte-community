<script lang="ts">
	import type { ComponentProps } from "svelte";
	import BodyShort from "./BodyShort.svelte";

	let props: Omit<ComponentProps<BodyShort>, "children"> = $props();
</script>

<BodyShort {...props}>Body short content</BodyShort>
