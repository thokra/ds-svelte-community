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
		d="M14.03 2.97a.75.75 0 0 1 0 1.06l-1.22 1.22H17A3.75 3.75 0 0 1 20.75 9v4.5a.75.75 0 0 1-1.5 0V9A2.25 2.25 0 0 0 17 6.75h-4.19l1.22 1.22a.75.75 0 0 1-1.06 1.06l-2.5-2.5a.748.748 0 0 1 0-1.06l2.5-2.5a.75.75 0 0 1 1.06 0ZM5 11.25A1.75 1.75 0 0 0 3.25 13v6c0 .966.784 1.75 1.75 1.75h6A1.75 1.75 0 0 0 12.75 19v-6A1.75 1.75 0 0 0 11 11.25H5ZM4.75 13a.25.25 0 0 1 .25-.25h6a.25.25 0 0 1 .25.25v6a.25.25 0 0 1-.25.25H5a.25.25 0 0 1-.25-.25v-6Z"
		clip-rule="evenodd"
	/>
</svg>
