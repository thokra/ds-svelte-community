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
		d="M4.25 3.5c0-.69.56-1.25 1.25-1.25h13c.69 0 1.25.56 1.25 1.25v10.998a.25.25 0 0 1-.352.228l-8.484-3.782a2.25 2.25 0 0 0-3.02 2.846l1.17 3.122a.25.25 0 0 1 0 .176l-1.17 3.122a2.247 2.247 0 0 0-.106 1.199c.03.17-.09.341-.263.341H5.5c-.69 0-1.25-.56-1.25-1.25v-17ZM12.37 7a.75.75 0 0 1 .75-.75h2.5a.75.75 0 1 1 0 1.5h-2.5a.75.75 0 0 1-.75-.75Zm-1.15-.55a.75.75 0 1 0-1.2-.9l-.81 1.078a.25.25 0 0 1-.377.026L8.65 6.47a.75.75 0 0 0-1.06 1.06l1 1a.75.75 0 0 0 1.13-.08l1.5-2Zm-1.734 6.004a.75.75 0 0 1 .819-.14l9 4a.75.75 0 0 1 0 1.371l-9 4a.75.75 0 0 1-1.007-.948l1.059-2.825a.25.25 0 0 1 .234-.162H13.5a.75.75 0 0 0 0-1.5h-2.909a.25.25 0 0 1-.234-.162l-1.06-2.825a.75.75 0 0 1 .189-.809Z"
		clip-rule="evenodd"
	/>
</svg>
