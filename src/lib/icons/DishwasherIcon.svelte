<script lang="ts" context="module">
	import newUniqueId from "locally-unique-id-generator";
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
		d="M4.25 4A.75.75 0 0 1 5 3.25h14a.75.75 0 0 1 .75.75v8.25H20a.75.75 0 0 1 .721.956l-2 7a.75.75 0 0 1-.721.544H6a.75.75 0 0 1-.721-.544l-2-7A.75.75 0 0 1 4 12.25h.25V4ZM5 13.75h-.006l1.572 5.5h10.868l1.572-5.5H5Zm7.261-1.5h-1.486a1.25 1.25 0 0 1 1.725-1.396 2.741 2.741 0 0 0-.239 1.396Zm-4.486 0H9.26a2.776 2.776 0 0 1 .239-1.396 1.25 1.25 0 0 0-1.725 1.396Zm-1.514 0H5.75v-4.5h12.5v4.5h-.511A2.75 2.75 0 0 0 13.5 9.695 2.74 2.74 0 0 0 12 9.25c-.553 0-1.069.163-1.5.445a2.75 2.75 0 0 0-4.24 2.555Zm9.964 0a1.25 1.25 0 1 0-2.45 0h2.45Zm2.025-7.5v1.5H5.75v-1.5h12.5ZM9.25 16a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75Z"
		clip-rule="evenodd"
	/>
</svg>
