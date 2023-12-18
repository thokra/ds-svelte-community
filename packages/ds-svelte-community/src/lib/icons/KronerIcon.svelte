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
		d="M10.95 7.4a.75.75 0 0 1 .15 1.05L8.438 12l2.662 3.55a.75.75 0 1 1-1.2.9l-2.65-3.533V16a.75.75 0 0 1-1.5 0V8a.75.75 0 0 1 1.5 0v3.083L9.9 7.55a.75.75 0 0 1 1.05-.15Zm1.8.6a.75.75 0 0 1 .75-.75H16a2.75 2.75 0 0 1 1.1 5.272l1.57 3.143a.75.75 0 1 1-1.34.67l-1.793-3.585H14.25V16a.75.75 0 0 1-1.5 0V8Zm4.5 2a1.25 1.25 0 0 1-1.266 1.25H14.25v-2.5H16c.69 0 1.25.56 1.25 1.25Z"
		clip-rule="evenodd"
	/>
</svg>
