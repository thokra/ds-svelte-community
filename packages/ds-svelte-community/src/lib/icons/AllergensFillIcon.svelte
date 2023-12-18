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
		d="M14.75 3.55a.75.75 0 0 1 .75-.75h.01a.75.75 0 0 1 0 1.5h-.01a.75.75 0 0 1-.75-.75Zm.75 2.2a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5Zm-7 7a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5Zm-.75-2.2a.75.75 0 0 1 .75-.75h.01a.75.75 0 1 1 0 1.5H8.5a.75.75 0 0 1-.75-.75Zm-2.213 1.973a.75.75 0 1 0-1.06-1.06l-.007.007a.75.75 0 0 0 1.06 1.06l.007-.007ZM3.55 14.74a.75.75 0 0 1 .75.75v.01a.75.75 0 0 1-1.5 0v-.01a.75.75 0 0 1 .75-.75Zm1.973 3.723a.75.75 0 0 0-1.06 1.06l.007.008a.75.75 0 1 0 1.06-1.061l-.007-.007ZM7.74 20.45a.75.75 0 0 1 .75-.75h.01a.75.75 0 1 1 0 1.5h-.01a.75.75 0 0 1-.75-.75Zm4.79-.92a.75.75 0 0 0-1.06-1.06l-.007.007a.75.75 0 1 0 1.06 1.06l.008-.006Zm.92-4.78a.75.75 0 0 1 .75.75v.01a.75.75 0 0 1-1.5 0v-.01a.75.75 0 0 1 .75-.75Zm-1.956-2.197a.73.73 0 0 1-.024-.022l-.007-.007a.75.75 0 1 1 1.067-1.055l.007.007a.75.75 0 0 1-1.043 1.077Zm1.043-7.03a.75.75 0 1 0-1.06-1.06l-.007.007a.75.75 0 0 0 1.06 1.06l.007-.007ZM10.55 7.74a.75.75 0 0 1 .75.75v.01a.75.75 0 0 1-1.5 0v-.01a.75.75 0 0 1 .75-.75Zm4.19 5.71a.75.75 0 0 1 .75-.75h.01a.75.75 0 1 1 0 1.5h-.01a.75.75 0 0 1-.75-.75Zm4.79-.92a.75.75 0 0 0-1.06-1.06l-.007.007a.75.75 0 1 0 1.06 1.06l.008-.007Zm.92-4.78a.75.75 0 0 1 .75.75v.01a.75.75 0 0 1-1.5 0V8.5a.75.75 0 0 1 .75-.75Zm-.92-3.28a.75.75 0 1 0-1.06 1.06l.007.007a.75.75 0 0 0 1.06-1.06l-.007-.008Z"
		clip-rule="evenodd"
	/>
</svg>
