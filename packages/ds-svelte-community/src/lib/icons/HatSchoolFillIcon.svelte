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
		d="M11.695 4.315a.75.75 0 0 1 .61 0l8.984 3.993A.748.748 0 0 1 21.75 9v7a.75.75 0 0 1-1.5 0v-5.846l-7.945 3.531a.75.75 0 0 1-.61 0l-9-4a.75.75 0 0 1 0-1.37l9-4Zm-6.445 8.39a.25.25 0 0 1 .352-.228l6.093 2.708a.75.75 0 0 0 .61 0l6.093-2.708a.25.25 0 0 1 .352.228V16a.75.75 0 0 1-.415.67l-.186.094a13.75 13.75 0 0 1-12.298 0l-.186-.093A.75.75 0 0 1 5.25 16v-3.295Z"
		clip-rule="evenodd"
	/>
</svg>
