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
		d="M6.047 11.494a4.25 4.25 0 1 1 2.907-7.988 4.25 4.25 0 0 1-2.907 7.988ZM9.614 6.73a.75.75 0 0 1-.448.96l-2.82 1.027a.75.75 0 1 1-.512-1.41l2.819-1.026a.75.75 0 0 1 .96.449Zm5.27 1.082a3.75 3.75 0 1 1 5.303 5.303l-2.829 2.83a.25.25 0 0 1-.353 0l-4.95-4.95a.25.25 0 0 1 0-.354l2.83-2.83Zm1.06 9.193a.25.25 0 0 1 0 .353l-2.828 2.828a3.75 3.75 0 0 1-5.303-5.303l2.828-2.828a.25.25 0 0 1 .354 0l4.95 4.95Z"
		clip-rule="evenodd"
	/>
</svg>
