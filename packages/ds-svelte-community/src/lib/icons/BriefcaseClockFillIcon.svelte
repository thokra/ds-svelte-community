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
		d="M9.5 4.75a.25.25 0 0 0-.25.25v1c0 .138.112.25.25.25h5a.25.25 0 0 0 .25-.25V5a.25.25 0 0 0-.25-.25h-5ZM7.75 6a.25.25 0 0 1-.25.25h-4c-.69 0-1.25.56-1.25 1.25v4c0 .69.56 1.25 1.25 1.25h4.424c.109 0 .204-.07.24-.172a7.253 7.253 0 0 1 13.224-1.01c.1.187.356.176.362-.036V7.5c0-.69-.56-1.25-1.25-1.25h-4a.25.25 0 0 1-.25-.25V5a1.75 1.75 0 0 0-1.75-1.75h-5A1.75 1.75 0 0 0 7.75 5v1Zm-.239 8.25c.148 0 .264.128.254.276a7.218 7.218 0 0 0 1.414 4.797c.128.172.01.427-.204.427H5c-.69 0-1.25-.56-1.25-1.25v-4a.25.25 0 0 1 .25-.25h3.511ZM9.25 15a5.75 5.75 0 1 1 11.5 0 5.75 5.75 0 0 1-11.5 0ZM15 11.75a.75.75 0 0 1 .75.75v2.19l.78.78a.75.75 0 1 1-1.06 1.06l-1-1a.75.75 0 0 1-.22-.53v-2.5a.75.75 0 0 1 .75-.75Z"
		clip-rule="evenodd"
	/>
</svg>
