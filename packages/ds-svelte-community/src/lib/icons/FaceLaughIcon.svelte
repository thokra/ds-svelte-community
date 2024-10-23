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
		d="M3.75 12a8.25 8.25 0 1 1 16.5 0 8.25 8.25 0 0 1-16.5 0M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25M8.822 14.5h6.38c-.552 1.163-1.751 1.92-3.202 1.92-1.444 0-2.632-.753-3.178-1.92M12 17.92c2.664 0 4.871-1.904 5.023-4.62a.29.29 0 0 0-.292-.3H7.3c-.166 0-.3.135-.292.3.15 2.716 2.328 4.62 4.992 4.62M9.534 9.674a1.25 1.25 0 0 0-1.708.458.75.75 0 0 1-1.299-.75 2.75 2.75 0 0 1 3.757-1.007.75.75 0 0 1-.75 1.299m6.64.458a1.25 1.25 0 0 0-1.708-.458.75.75 0 1 1-.75-1.299 2.75 2.75 0 0 1 3.757 1.007.75.75 0 0 1-1.3.75"
		clip-rule="evenodd"
	/>
</svg>
