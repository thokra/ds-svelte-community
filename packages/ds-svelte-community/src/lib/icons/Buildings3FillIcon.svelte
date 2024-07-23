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
		d="M7 2.25a.75.75 0 0 0-.75.75v18c0 .414.336.75.75.75h10a.75.75 0 0 0 .75-.75V3a.75.75 0 0 0-.75-.75H7Zm3.75 4.25a.75.75 0 0 0-1.5 0v2a.75.75 0 0 0 1.5 0v-2ZM13 5.75a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 1 .75-.75Zm-2.25 6.75a.75.75 0 0 0-1.5 0v2a.75.75 0 0 0 1.5 0v-2Zm2.25-.75a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 1 .75-.75Zm-8.5-2.5a.25.25 0 0 1 .25.25v12a.25.25 0 0 1-.25.25H3a.75.75 0 0 1-.75-.75V10A.75.75 0 0 1 3 9.25h1.5Zm15 12.5a.25.25 0 0 1-.25-.25v-12a.25.25 0 0 1 .25-.25H21a.75.75 0 0 1 .75.75v11a.75.75 0 0 1-.75.75h-1.5Z"
		clip-rule="evenodd"
	/>
</svg>
