<script lang="ts" context="module">
	import newUniqueId from "$lib/components/local-unique-id";
	import type { SVGAttributes } from "svelte/elements";
</script>

<script lang="ts">
	/**
	 * Title of the icon, used for accessibility
	 */
	export let title = "";

	type $$Props = SVGAttributes<SVGElement> & {
		title?: string;
	};

	const id = newUniqueId();
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	width="1em"
	height="1em"
	fill="none"
	focusable="false"
	role="img"
	viewBox="0 0 24 24"
	aria-labelledby={title ? id : undefined}
	{...$$restProps}
>
	{#if title}
		<title {id}>{title}</title>
	{/if}
	<slot />
	<path
		fill="currentColor"
		d="M16.768 7.018a.75.75 0 0 0 0 1.5h1.654L14 12.939l-3.47-3.47a.75.75 0 0 0-1.06 0l-6 6a.75.75 0 1 0 1.06 1.061L10 11.06l3.47 3.47a.75.75 0 0 0 1.06 0l5.023-5.022v1.795a.75.75 0 0 0 1.5 0V7.768a.75.75 0 0 0-.75-.75h-3.535Z"
	/>
</svg>
