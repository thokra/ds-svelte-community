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
		d="M4.25 4A.75.75 0 0 1 5 3.25a15.69 15.69 0 0 1 10.113 3.675.75.75 0 0 1-.964 1.15A14.19 14.19 0 0 0 5 4.75.75.75 0 0 1 4.25 4ZM5 8.25a.75.75 0 0 0 0 1.5 9.21 9.21 0 0 1 3.977.896.75.75 0 0 0 .646-1.354A10.71 10.71 0 0 0 5 8.25ZM4.25 14a.75.75 0 0 1 .75-.75c1.046 0 2.029.28 2.876.77a.75.75 0 0 1-.752 1.298A4.227 4.227 0 0 0 5 14.75a.75.75 0 0 1-.75-.75Zm-.75 5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM15 9.25a5.75 5.75 0 1 0 0 11.5 5.75 5.75 0 0 0 0-11.5Zm-2.5 5a.75.75 0 0 0 0 1.5h5a.75.75 0 0 0 0-1.5h-5Z"
		clip-rule="evenodd"
	/>
</svg>
