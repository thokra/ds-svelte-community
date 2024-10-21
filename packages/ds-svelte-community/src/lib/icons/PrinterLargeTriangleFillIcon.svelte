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
		d="M16.538 2.136a.75.75 0 0 0-1.312 0l-5 9a.75.75 0 0 0 .656 1.114h10a.75.75 0 0 0 .656-1.114l-5-9Zm-4.688 2.45a.25.25 0 0 1 .107.346l-.486.875a.25.25 0 0 1-.33.102L6.665 3.67a.75.75 0 0 1 .67-1.342l4.515 2.258ZM10.8 6.25a.25.25 0 0 1 .218.371l-2.103 3.786a2.25 2.25 0 0 0 1.967 3.343H16.5a.25.25 0 0 1 .25.25v1.131c0 .2.223.32.389.208l1.445-.963a.75.75 0 0 1 .832 1.248l-2.555 1.703a.25.25 0 0 0-.111.208V20a.75.75 0 0 1-.75.75H5a.75.75 0 0 1-.75-.75V7A.75.75 0 0 1 5 6.25h5.8Zm-2.8 10a.75.75 0 0 0 0 1.5h5a.75.75 0 0 0 0-1.5H8Z"
		clip-rule="evenodd"
	/>
</svg>
