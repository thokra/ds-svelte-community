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
		d="M11.25 3.125a.75.75 0 0 0-.874-.74C5.764 3.159 2.25 7.168 2.25 12a9.71 9.71 0 0 0 1.803 5.65.75.75 0 0 0 1.141.095l3.653-3.652a.75.75 0 0 0 .16-.824 3.251 3.251 0 0 1 1.774-4.283.75.75 0 0 0 .469-.695V3.125ZM3.75 12a8.254 8.254 0 0 1 6-7.94v3.756a4.749 4.749 0 0 0-2.3 5.552l-2.655 2.655A8.21 8.21 0 0 1 3.75 12Zm9.266-9.448a.75.75 0 0 1 .608-.167 9.758 9.758 0 0 1 7.991 7.99.75.75 0 0 1-.74.875H15.71a.75.75 0 0 1-.695-.469 3.263 3.263 0 0 0-1.795-1.795.75.75 0 0 1-.469-.695V3.125c0-.221.097-.43.265-.573ZM14.25 4.06v3.756a4.768 4.768 0 0 1 1.934 1.934h3.756a8.268 8.268 0 0 0-5.69-5.69Zm.764 9.159a.75.75 0 0 1 .695-.469h5.166a.75.75 0 0 1 .74.874c-.774 4.612-4.783 8.126-9.615 8.126a9.71 9.71 0 0 1-5.65-1.803.75.75 0 0 1-.095-1.141l3.653-3.653a.75.75 0 0 1 .823-.16 3.251 3.251 0 0 0 4.283-1.775Zm1.17 1.031a4.749 4.749 0 0 1-5.552 2.3l-2.655 2.655A8.254 8.254 0 0 0 19.94 14.25h-3.755Z"
		clip-rule="evenodd"
	/>
</svg>
