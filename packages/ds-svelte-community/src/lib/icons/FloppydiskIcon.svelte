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
		d="M4 3.25a.75.75 0 0 0-.75.75v16c0 .414.336.75.75.75h16a.75.75 0 0 0 .75-.75V6a.75.75 0 0 0-.22-.53l-2-2a.75.75 0 0 0-.53-.22H4Zm15.25 3.06-1.56-1.56h-.94V7a.75.75 0 0 1-.75.75H8A.75.75 0 0 1 7.25 7V4.75h-2.5v14.5h1.5V11a.75.75 0 0 1 .75-.75h10a.75.75 0 0 1 .75.75v8.25h1.5V6.31Zm-3 12.94h-8.5v-7.5h8.5v7.5Zm-1-14.5v1.5h-6.5v-1.5h6.5Zm-6 9.25a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75Zm0 3a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1-.75-.75Z"
		clip-rule="evenodd"
	/>
</svg>
