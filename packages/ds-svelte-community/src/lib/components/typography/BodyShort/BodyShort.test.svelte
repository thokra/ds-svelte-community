<script lang="ts">
	import type { ComponentProps } from "svelte";
	import BodyShort from "./BodyShort.svelte";

	type $$Props = ComponentProps<BodyShort>;
</script>

<BodyShort {...$$props}>Body short content</BodyShort>
