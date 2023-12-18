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
		d="M13.25 3.5a.25.25 0 0 0-.25-.25H6.5c-.69 0-1.25.56-1.25 1.25v15c0 .69.56 1.25 1.25 1.25h11c.69 0 1.25-.56 1.25-1.25V9a.25.25 0 0 0-.25-.25h-4c-.69 0-1.25-.56-1.25-1.25v-4Zm1.5.793a.25.25 0 0 1 .427-.177l2.707 2.707a.25.25 0 0 1-.177.427H15a.25.25 0 0 1-.25-.25V4.293Zm-1.624 7.759a2.251 2.251 0 0 0-2.54.198H11a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75v-2a.75.75 0 0 1 1.5 0A3.75 3.75 0 1 1 12 17.75a.75.75 0 0 1 0-1.5 2.25 2.25 0 0 0 1.126-4.199Z"
		clip-rule="evenodd"
	/>
</svg>
