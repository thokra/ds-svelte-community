<script lang="ts" generics="V extends ComponentType">
	import type { ComponentType } from "svelte";

	let { ...restProps }: ComponentType["arguments"] = $props();
</script>

<pre>{JSON.stringify(restProps, undefined, 2)}</pre>
