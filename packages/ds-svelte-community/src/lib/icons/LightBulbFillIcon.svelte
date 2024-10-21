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
		d="M7.176 4.211C8.418 2.93 10.136 2.25 12 2.25c1.863 0 3.582.68 4.824 1.961A6.882 6.882 0 0 1 18.75 9c0 1.223-.476 2.126-1.114 3.148-.13.208-.269.424-.415.652-.575.894-1.27 1.975-2.05 3.535a.75.75 0 0 1-.671.415h-5a.75.75 0 0 1-.67-.415c-.781-1.56-1.476-2.64-2.05-3.535a62.528 62.528 0 0 1-.416-.652C5.726 11.126 5.25 10.223 5.25 9c0-1.852.732-3.557 1.926-4.789ZM9.75 20a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75c0 .447-.201.983-.54 1.406-.357.446-.931.844-1.71.844-.779 0-1.354-.398-1.71-.844-.339-.423-.54-.959-.54-1.406Zm.25-2.75a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5h-4Z"
		clip-rule="evenodd"
	/>
</svg>
