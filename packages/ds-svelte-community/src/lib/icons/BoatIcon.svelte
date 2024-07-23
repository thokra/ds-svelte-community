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
		d="M5.25 3A.75.75 0 0 1 6 2.25h12a.75.75 0 0 1 .75.75v8.068l.973.302a.75.75 0 0 1 .475.99l-3.5 8.914a.75.75 0 0 1-.698.476H8a.75.75 0 0 1-.698-.476l-3.5-8.914a.75.75 0 0 1 .475-.99l.973-.302V3Zm12 7.601-5.027-1.563a.75.75 0 0 0-.446 0L6.75 10.601V3.75h10.5v6.851ZM5.493 12.563 8.51 20.25h6.978l3.018-7.687L12 10.54l-6.507 2.023ZM8.25 6.5A.75.75 0 0 1 9 5.75h1.5a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75Zm4.5 0a.75.75 0 0 1 .75-.75H15a.75.75 0 0 1 0 1.5h-1.5a.75.75 0 0 1-.75-.75Z"
		clip-rule="evenodd"
	/>
</svg>
