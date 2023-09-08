<script lang="ts">
	import CopyButton from "./CopyButton.svelte";
	import type { Props } from "./type";

	type $$Props = Props;

	const tshack = (v: object) => v as Props;
</script>

<CopyButton {...tshack($$props)} />
