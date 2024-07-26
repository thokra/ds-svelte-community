<script lang="ts">
	import CopyButton from "./CopyButton.svelte";
	import type { Props } from "./type";

	let props: Props = $props();
</script>

<CopyButton {...props} />
