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
		d="M6.25 3A.75.75 0 0 1 7 2.25h10a.75.75 0 0 1 .75.75v6.25H21a.75.75 0 0 1 .75.75v11a.75.75 0 0 1-.75.75H3a.75.75 0 0 1-.75-.75V10A.75.75 0 0 1 3 9.25h3.25V3Zm11.5 17.25v-9.5h2.5v9.5h-2.5Zm-1.5-16.5v16.5h-8.5V3.75h8.5Zm-10 7v9.5h-2.5v-9.5h2.5Zm3.75-5a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 1 .75-.75Zm3 0a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 1 .75-.75Zm-2.25 6.75a.75.75 0 0 0-1.5 0v2a.75.75 0 0 0 1.5 0v-2Zm2.25-.75a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 1 .75-.75Z"
		clip-rule="evenodd"
	/>
</svg>
