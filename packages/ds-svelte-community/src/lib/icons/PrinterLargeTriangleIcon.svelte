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
		d="M16.538 2.136a.75.75 0 0 0-1.312 0l-5 9a.75.75 0 0 0 .656 1.114h10a.75.75 0 0 0 .656-1.114l-5-9Zm-.656 1.908 3.725 6.706h-7.45l3.725-6.706Zm-9.553-1.38a.75.75 0 0 1 1.006-.335l4 2a.75.75 0 1 1-.67 1.342l-4-2a.75.75 0 0 1-.336-1.006ZM5 6.25a.75.75 0 0 0-.75.75v13c0 .414.336.75.75.75h11a.75.75 0 0 0 .75-.75v-2.599l2.666-1.777a.75.75 0 1 0-.832-1.248l-1.834 1.223V14a.75.75 0 0 0-1.5 0v5.25h-9.5V7.75h4.75a.75.75 0 0 0 0-1.5H5ZM7.25 17a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75Z"
		clip-rule="evenodd"
	/>
</svg>
