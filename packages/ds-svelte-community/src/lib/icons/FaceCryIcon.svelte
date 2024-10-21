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
		d="M3.75 12a8.25 8.25 0 1 1 16.5 0 8.25 8.25 0 0 1-16.5 0ZM12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm0 11.25c-1.444 0-2.632.753-3.178 1.92h6.356c-.546-1.167-1.734-1.92-3.178-1.92Zm0-1.5c2.664 0 4.842 1.904 4.992 4.62a.288.288 0 0 1-.292.3H7.3a.288.288 0 0 1-.292-.3C7.158 13.904 9.336 12 12 12ZM7.512 9.34a1.25 1.25 0 0 0 1.531-.885.75.75 0 0 1 1.45.389 2.75 2.75 0 0 1-3.369 1.944.75.75 0 1 1 .388-1.449Zm7.445-.885a1.25 1.25 0 0 0 1.53.884.75.75 0 0 1 .389 1.45 2.75 2.75 0 0 1-3.368-1.945.75.75 0 1 1 1.449-.389Z"
		clip-rule="evenodd"
	/>
</svg>
