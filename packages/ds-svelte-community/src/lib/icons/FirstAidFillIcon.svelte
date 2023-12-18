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
		fill-rule="evenodd"
		d="M8.25 4A.75.75 0 0 1 9 3.25h6a.75.75 0 0 1 .75.75v4.25H20a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-.75.75h-4.25V20a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v-4.25H4a.75.75 0 0 1-.75-.75V9A.75.75 0 0 1 4 8.25h4.25V4Z"
		clip-rule="evenodd"
	/>
</svg>
