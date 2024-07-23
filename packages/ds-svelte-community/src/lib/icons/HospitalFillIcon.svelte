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
		d="M5 2.25a.75.75 0 0 0-.75.75v18c0 .414.336.75.75.75h6a.25.25 0 0 0 .25-.25V17a.75.75 0 0 1 .75-.75h3.5a.75.75 0 0 1 .75.75v4.5c0 .138.112.25.25.25H19a.75.75 0 0 0 .75-.75V3a.75.75 0 0 0-.75-.75H5Zm9.5 19.5a.25.25 0 0 0 .25-.25V18a.25.25 0 0 0-.25-.25H13a.25.25 0 0 0-.25.25v3.5c0 .138.112.25.25.25h1.5Zm-6-9.5a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0v-1a.75.75 0 0 1 .75-.75ZM9.25 17a.75.75 0 0 0-1.5 0v1a.75.75 0 0 0 1.5 0v-1ZM12 12.25a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0v-1a.75.75 0 0 1 .75-.75Zm4.25.75a.75.75 0 0 0-1.5 0v1a.75.75 0 0 0 1.5 0v-1ZM12 5.25a.75.75 0 0 1 .75.75v1c0 .138.112.25.25.25h1a.75.75 0 0 1 0 1.5h-1a.25.25 0 0 0-.25.25v1a.75.75 0 0 1-1.5 0V9a.25.25 0 0 0-.25-.25h-1a.75.75 0 0 1 0-1.5h1a.25.25 0 0 0 .25-.25V6a.75.75 0 0 1 .75-.75Z"
		clip-rule="evenodd"
	/>
</svg>
