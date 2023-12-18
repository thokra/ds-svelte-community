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
		d="M16.538 2.136a.75.75 0 0 0-1.312 0l-5 9a.75.75 0 0 0 .656 1.114h10a.75.75 0 0 0 .656-1.114l-5-9Zm-.656 1.908 3.725 6.706h-7.45l3.725-6.706ZM7 2.25a.75.75 0 0 0-.75.75v4.25H4A1.75 1.75 0 0 0 2.25 9v9c0 .414.336.75.75.75h3.25V21c0 .414.336.75.75.75h10a.75.75 0 0 0 .75-.75v-2.25H21a.75.75 0 0 0 .75-.75v-3.75a.75.75 0 0 0-1.5 0v3h-2.5v-3a.75.75 0 0 0-1.5 0v6h-8.5V12a.75.75 0 0 0-1.5 0v5.25h-2.5V9A.25.25 0 0 1 4 8.75h5.75a.75.75 0 0 0 0-1.5h-2v-3.5H12a.75.75 0 0 0 0-1.5H7Zm3 12a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5h-4ZM9.25 18a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 0 1.5H10a.75.75 0 0 1-.75-.75Z"
		clip-rule="evenodd"
	/>
</svg>
