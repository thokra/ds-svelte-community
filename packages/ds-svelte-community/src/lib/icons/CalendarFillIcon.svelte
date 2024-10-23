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
		d="M9 2.25a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0V3A.75.75 0 0 1 9 2.25m6 0a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75M13.25 4.5a.25.25 0 0 0-.25-.25h-2a.25.25 0 0 0-.25.25V7a1.75 1.75 0 1 1-3.5 0V4.5A.25.25 0 0 0 7 4.25H4.5c-.69 0-1.25.56-1.25 1.25V9c0 .138.112.25.25.25h17a.25.25 0 0 0 .25-.25V5.5c0-.69-.56-1.25-1.25-1.25H17a.25.25 0 0 0-.25.25V7a1.75 1.75 0 1 1-3.5 0zm7.5 6.5a.25.25 0 0 0-.25-.25h-17a.25.25 0 0 0-.25.25v7.5c0 .69.56 1.25 1.25 1.25h15c.69 0 1.25-.56 1.25-1.25zm-14 2a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75m4.75-.75a.75.75 0 0 0 0 1.5h1a.75.75 0 0 0 0-1.5zm3.25.75a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75m-3.25 2.25a.75.75 0 0 0 0 1.5h1a.75.75 0 0 0 0-1.5zm3.25.75a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75m-7.25-.75a.75.75 0 0 0 0 1.5h1a.75.75 0 0 0 0-1.5z"
		clip-rule="evenodd"
	/>
</svg>
