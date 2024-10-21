<script lang="ts" module>
	import newUniqueId from "$lib/components/local-unique-id";
</script>

<script lang="ts">
	import type { Snippet } from "svelte";

	type Props = {
		/**
		 * Title of the icon, used for accessibility
		 */
		title?: string;

		children?: Snippet;

		[key: string]: unknown;
	};

	let { title, children, ...restProps }: Props = $props();

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
	{...restProps}
>
	{#if title}
		<title {id}>{title}</title>
	{/if}
	{#if children}
		{@render children()}
	{/if}
	<path
		fill="currentColor"
		fill-rule="evenodd"
		d="M3.146 12c0-5.385 4.366-9.75 9.75-9.75 1.802 0 3.257.373 4.478 1.164 1.214.787 2.128 1.942 2.928 3.385.014.024.026.05.037.075.603 1.448 1.065 4.135-.971 6.015-.74.682-1.676 1.024-2.352 1.27l-.282.105c-.378.144-.603.252-.735.36-.09.073-.103.111-.103.188 0 .217.048.333.093.403a.78.78 0 0 0 .28.243c.156.09.352.17.607.264l.144.052c.21.076.453.164.681.266.86.382 1.279 1.32 1.202 2.23-.08.95-.674 1.9-1.817 2.535a9.715 9.715 0 0 1-4.189.945A9.75 9.75 0 0 1 3.147 12Zm11.916-2.61a1.5 1.5 0 1 1 2.898.777 1.5 1.5 0 0 1-2.898-.777ZM7.818 7.45a1.5 1.5 0 1 1 2.898.776 1.5 1.5 0 0 1-2.898-.777Zm4.27-1.445a1.5 1.5 0 1 1 2.897.776 1.5 1.5 0 0 1-2.898-.776Z"
		clip-rule="evenodd"
	/>
</svg>
