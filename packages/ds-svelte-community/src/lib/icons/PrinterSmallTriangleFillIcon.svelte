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
		d="M16.538 2.136a.75.75 0 0 0-1.312 0l-5 9a.75.75 0 0 0 .656 1.114h10a.75.75 0 0 0 .656-1.114l-5-9Zm-3.516.114a.25.25 0 0 1 .219.371l-1.667 3a.25.25 0 0 1-.219.129H6.5a.25.25 0 0 1-.25-.25V3A.75.75 0 0 1 7 2.25h6.022Zm8.371 11.441a2.246 2.246 0 0 1-.511.059H19.5a.25.25 0 0 0-.25.25v4.5c0 .138.112.25.25.25H21a.75.75 0 0 0 .75-.75v-4.049c0-.178-.183-.3-.357-.26ZM8.632 11.53c-.002-.15-.117-.279-.266-.279H7a.75.75 0 0 0-.75.75v9c0 .414.336.75.75.75h10a.75.75 0 0 0 .75-.75v-7a.25.25 0 0 0-.25-.25h-6.618a2.25 2.25 0 0 1-2.25-2.221Zm.72-1.908a.25.25 0 0 1-.219.129H7A2.25 2.25 0 0 0 4.75 12v6.5a.25.25 0 0 1-.25.25H3a.75.75 0 0 1-.75-.75V9c0-.966.784-1.75 1.75-1.75h6.244a.25.25 0 0 1 .219.371l-1.111 2ZM9.25 16a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75Zm.75 2.25a.75.75 0 0 0 0 1.5h2.5a.75.75 0 0 0 0-1.5H10Z"
		clip-rule="evenodd"
	/>
</svg>
