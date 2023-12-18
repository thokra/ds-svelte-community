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
		d="M2.25 12c0-1.09.179-2.14.51-3.118a.745.745 0 0 1 .09-.255 9.754 9.754 0 0 1 15.494-4.031L19.47 3.47a.75.75 0 1 1 1.06 1.06l-16 16a.75.75 0 0 1-1.06-1.06l1.126-1.126a9.745 9.745 0 0 1-1.746-2.97.745.745 0 0 1-.09-.257A9.738 9.738 0 0 1 2.25 12Zm1.5 0c0-.78.108-1.535.31-2.25h4.18a34.495 34.495 0 0 0 0 4.5H4.06A8.258 8.258 0 0 1 3.75 12Zm1.91 5.28 1.53-1.53H4.65c.28.548.62 1.06 1.01 1.53Zm4.03-4.03 3.5-3.5H9.742a33.006 33.006 0 0 0-.053 3.5Zm5.842-5.843L17.28 5.66a8.24 8.24 0 0 0-2.268-1.343c.216 1.052.39 2.079.521 3.09ZM8.99 4.317a41.371 41.371 0 0 0-.621 3.933h-3.72a8.28 8.28 0 0 1 4.34-3.934Zm1.63-.452a41.122 41.122 0 0 0-.742 4.385h4.245a41.107 41.107 0 0 0-.742-4.385 8.31 8.31 0 0 0-2.76 0Z"
		clip-rule="evenodd"
	/>
</svg>
