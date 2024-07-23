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
		d="M6 17.75a.75.75 0 0 1-.75-.75V4A.75.75 0 0 1 6 3.25h4a.75.75 0 0 1 .75.75v13a.75.75 0 0 1-.75.75H6Zm.75-1.5h2.5V4.75h-2.5v11.5ZM3.25 20a.75.75 0 0 1 .75-.75h16a.75.75 0 0 1 0 1.5H4a.75.75 0 0 1-.75-.75Zm10-3c0 .414.336.75.75.75h4a.75.75 0 0 0 .75-.75v-7a.75.75 0 0 0-.75-.75h-4a.75.75 0 0 0-.75.75v7Zm4-.75h-2.5v-5.5h2.5v5.5Z"
		clip-rule="evenodd"
	/>
</svg>
