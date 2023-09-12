<script lang="ts">
	import type { ComponentProps } from "svelte";
	import Label from "./Label.svelte";

	type $$Props = ComponentProps<Label>;
</script>

<Label {...$$props}>Label content</Label>
