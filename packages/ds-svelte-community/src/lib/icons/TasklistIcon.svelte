<script lang="ts" context="module">
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
		d="M5.75 20.25V3.75h12.5v16.5H5.75Zm-.25-18c-.69 0-1.25.56-1.25 1.25v17c0 .69.56 1.25 1.25 1.25h13c.69 0 1.25-.56 1.25-1.25v-17c0-.69-.56-1.25-1.25-1.25h-13Zm5.45 3.15a.75.75 0 0 1 .15 1.05l-1.5 2a.75.75 0 0 1-1.13.08l-1-1a.75.75 0 0 1 1.06-1.06l.389.388L9.9 5.55a.75.75 0 0 1 1.05-.15Zm2.05.85a.75.75 0 0 0 0 1.5h2.5a.75.75 0 0 0 0-1.5H13Zm-4 5a.75.75 0 0 0 0 1.5h.01a.75.75 0 0 0 0-1.5H9Zm2.25.75a.75.75 0 0 1 .75-.75h3.5a.75.75 0 0 1 0 1.5H12a.75.75 0 0 1-.75-.75Zm0 4a.75.75 0 0 1 .75-.75h3.5a.75.75 0 0 1 0 1.5H12a.75.75 0 0 1-.75-.75Zm-3 0a.75.75 0 0 1 .75-.75h.01a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75Z"
		clip-rule="evenodd"
	/>
</svg>
