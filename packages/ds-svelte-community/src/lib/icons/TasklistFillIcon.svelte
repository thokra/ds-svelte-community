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
		d="M4.25 3.5c0-.69.56-1.25 1.25-1.25h13c.69 0 1.25.56 1.25 1.25v17c0 .69-.56 1.25-1.25 1.25h-13c-.69 0-1.25-.56-1.25-1.25v-17Zm7 12.5a.75.75 0 0 1 .75-.75h3.5a.75.75 0 0 1 0 1.5H12a.75.75 0 0 1-.75-.75Zm.75-4.75a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5H12ZM8.25 12a.75.75 0 0 1 .75-.75h.01a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75ZM9 15.25a.75.75 0 0 0 0 1.5h.01a.75.75 0 0 0 0-1.5H9ZM12.25 7a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 0 1.5H13a.75.75 0 0 1-.75-.75Zm-1.15-.55a.75.75 0 1 0-1.2-.9l-.981 1.308-.389-.388a.75.75 0 0 0-1.06 1.06l1 1a.75.75 0 0 0 1.13-.08l1.5-2Z"
		clip-rule="evenodd"
	/>
</svg>
