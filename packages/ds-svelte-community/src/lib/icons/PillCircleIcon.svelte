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
		d="M6.75 12a5.25 5.25 0 1 1 10.5 0 5.25 5.25 0 0 1-10.5 0ZM12 5.25a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5Zm4.015 6.087a.75.75 0 1 0-.513-1.41l-7.517 2.736a.75.75 0 0 0 .513 1.41l7.517-2.736Z"
		clip-rule="evenodd"
	/>
</svg>
