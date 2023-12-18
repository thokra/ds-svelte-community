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
		d="M8.25 7a3.751 3.751 0 0 0 2.43 3.51l-3.692 4.923a2.75 2.75 0 1 0 1.2.9l3.062-4.083v3.104a2.751 2.751 0 1 0 1.5 0V12.25l3.063 4.083a2.75 2.75 0 1 0 1.2-.9L13.32 10.51A3.751 3.751 0 0 0 12 3.25 3.75 3.75 0 0 0 8.25 7ZM12 4.75a2.25 2.25 0 0 0-.008 4.5h.015A2.25 2.25 0 0 0 12 4.75Zm0 12a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5Zm-6 0a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5Zm12 0a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5Z"
		clip-rule="evenodd"
	/>
</svg>
