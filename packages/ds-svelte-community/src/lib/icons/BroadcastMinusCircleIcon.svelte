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
		d="M5 3.25a.75.75 0 0 0 0 1.5 14.19 14.19 0 0 1 9.15 3.325.75.75 0 0 0 .963-1.15A15.69 15.69 0 0 0 5 3.25ZM4.25 9A.75.75 0 0 1 5 8.25c1.654 0 3.222.374 4.623 1.042a.75.75 0 1 1-.646 1.354A9.21 9.21 0 0 0 5 9.75.75.75 0 0 1 4.25 9Zm6.5 6a4.25 4.25 0 1 1 8.5 0 4.25 4.25 0 0 1-8.5 0ZM15 9.25a5.75 5.75 0 1 0 0 11.5 5.75 5.75 0 0 0 0-11.5Zm-2.5 5a.75.75 0 0 0 0 1.5h5a.75.75 0 0 0 0-1.5h-5ZM3.5 19a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM5 13.25a.75.75 0 0 0 0 1.5c.775 0 1.5.207 2.124.568a.75.75 0 1 0 .752-1.298A5.727 5.727 0 0 0 5 13.25Z"
		clip-rule="evenodd"
	/>
</svg>
