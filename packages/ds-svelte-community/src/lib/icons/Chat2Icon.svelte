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
		d="M4.75 5A.25.25 0 0 1 5 4.75h11a.25.25 0 0 1 .25.25v.5a.75.75 0 0 0 1.5 0V5A1.75 1.75 0 0 0 16 3.25H5A1.75 1.75 0 0 0 3.25 5v10a.75.75 0 0 0 1.085.67l1.502-.75a.75.75 0 0 0-.671-1.341l-.416.207V5ZM9 8.75a.25.25 0 0 0-.25.25v8c0 .138.112.25.25.25h7a.75.75 0 0 1 .335.08l2.915 1.457V9a.25.25 0 0 0-.25-.25H9ZM7.25 9c0-.966.784-1.75 1.75-1.75h10c.966 0 1.75.784 1.75 1.75v11a.75.75 0 0 1-1.085.67l-3.842-1.92H9A1.75 1.75 0 0 1 7.25 17V9Zm3 4a.75.75 0 0 1 .75-.75h.01a.75.75 0 0 1 0 1.5H11a.75.75 0 0 1-.75-.75Zm3.75-.75a.75.75 0 0 0 0 1.5h.01a.75.75 0 0 0 0-1.5H14Zm2.25.75a.75.75 0 0 1 .75-.75h.01a.75.75 0 0 1 0 1.5H17a.75.75 0 0 1-.75-.75Z"
		clip-rule="evenodd"
	/>
</svg>
