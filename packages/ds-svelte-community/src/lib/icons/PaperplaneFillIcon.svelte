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
		d="M6.317 4.32a.75.75 0 0 0-1.023.932l2.023 5.666a.5.5 0 0 0 .471.332H13a.75.75 0 0 1 0 1.5H7.788a.5.5 0 0 0-.47.332l-2.024 5.666a.75.75 0 0 0 1.023.932l15-7a.75.75 0 0 0 0-1.36l-15-7Z"
		clip-rule="evenodd"
	/>
</svg>
