<script lang="ts">
	import type { Snippet } from "svelte";
	interface Props {
		title?: string;
		children: Snippet;
	}

	let { title, children }: Props = $props();
</script>

<svelte:head>
	<title>{title} &bullet; ds-svelte-community</title>
</svelte:head>

{@render children()}
