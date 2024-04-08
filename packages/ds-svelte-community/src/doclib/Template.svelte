<script lang="ts">
	import { getDocContext, type Template } from "./context.svelte";

	let { children, name }: { children: Template; name?: string } = $props();

	$effect(() => {
		const ctx = getDocContext();
		ctx.setSnippet(name || "default", children);
	});
</script>
