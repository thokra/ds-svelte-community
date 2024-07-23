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
		d="M6.75 7.5a5.25 5.25 0 1 1 10.5 0 5.25 5.25 0 0 1-10.5 0Zm.477 8.727a6.75 6.75 0 0 1 6.253-1.813c.198.045.248.3.1.439A4.986 4.986 0 0 0 12 18.5a4.98 4.98 0 0 0 .87 2.82c.12.175 0 .43-.213.43H6a.75.75 0 0 1-.75-.75 6.75 6.75 0 0 1 1.977-4.773Zm11.803.243a.75.75 0 0 1 0 1.06l-.97.97.97.97a.75.75 0 1 1-1.06 1.06l-.97-.97-.97.97a.75.75 0 1 1-1.06-1.06l.97-.97-.97-.97a.75.75 0 1 1 1.06-1.06l.97.97.97-.97a.75.75 0 0 1 1.06 0Z"
		clip-rule="evenodd"
	/>
</svg>
