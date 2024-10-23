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
		d="M3.25 4A.75.75 0 0 1 4 3.25h16a.75.75 0 0 1 .75.75v16a.75.75 0 0 1-.75.75H4a.75.75 0 0 1-.75-.75zm2 15c0 .138.112.25.25.25h1a.25.25 0 0 0 .25-.25v-.438c0-.574.39-1.074.947-1.213l2.485-.621A.75.75 0 0 0 10.75 16v-3.5a.75.75 0 0 1 1.5 0V19c0 .138.112.25.25.25h1a.25.25 0 0 0 .25-.25v-6.5a2.25 2.25 0 0 0-4.5 0v2.72a.25.25 0 0 1-.19.242l-1.727.432a2.75 2.75 0 0 0-2.083 2.668zM19 16.75a.25.25 0 0 0 .25-.25v-1a.25.25 0 0 0-.25-.25h-1c-.69 0-1.25-.56-1.25-1.25v-1a.25.25 0 0 1 .25-.25h1a.75.75 0 0 0 0-1.5h-1a.25.25 0 0 1-.25-.25V9a.75.75 0 0 0-.75-.75h-1.8a.25.25 0 0 1-.219-.372l1.673-3.01a.08.08 0 0 0-.069-.118H14.15a.25.25 0 0 0-.218.129L12.67 7.15a1.75 1.75 0 0 0 1.53 2.6h.8a.25.25 0 0 1 .25.25v4A2.75 2.75 0 0 0 18 16.75z"
		clip-rule="evenodd"
	/>
</svg>
