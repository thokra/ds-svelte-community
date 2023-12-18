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
		d="M7 2.25a.75.75 0 0 0-.75.75v4.25H4A1.75 1.75 0 0 0 2.25 9v9c0 .414.336.75.75.75h3.25V21c0 .414.336.75.75.75h10a.75.75 0 0 0 .75-.75v-2.25H21a.75.75 0 0 0 .75-.75V9A1.75 1.75 0 0 0 20 7.25h-2.25V3a.75.75 0 0 0-.75-.75H7ZM3.75 9A.25.25 0 0 1 4 8.75h16a.25.25 0 0 1 .25.25v8.25h-2.5V12a.75.75 0 0 0-.75-.75H7a.75.75 0 0 0-.75.75v5.25h-2.5V9Zm12.5-1.75v-3.5h-8.5v3.5h8.5Zm-8.5 5.5v7.5h8.5v-7.5h-8.5ZM9.25 15a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75Zm0 3a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 0 1.5H10a.75.75 0 0 1-.75-.75Z"
		clip-rule="evenodd"
	/>
</svg>
