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
		d="M13 3.25a.25.25 0 0 1 .25.25v4c0 .69.56 1.25 1.25 1.25h4a.25.25 0 0 1 .25.25v10.5c0 .69-.56 1.25-1.25 1.25h-11c-.69 0-1.25-.56-1.25-1.25v-15c0-.69.56-1.25 1.25-1.25H13Zm2.177.866a.25.25 0 0 0-.427.177V7c0 .138.112.25.25.25h2.707a.25.25 0 0 0 .177-.427l-2.707-2.707Zm.353 10.164-1.75 1.75a.75.75 0 1 1-1.06-1.06l1.043-1.043a.25.25 0 0 0 0-.354L12.72 12.53a.75.75 0 1 1 1.06-1.06l1.75 1.75a.75.75 0 0 1 0 1.06Zm-7.06 0a.75.75 0 0 1 0-1.06l1.75-1.75a.75.75 0 1 1 1.06 1.06l-1.043 1.043a.25.25 0 0 0 0 .354l1.043 1.043a.75.75 0 1 1-1.06 1.06l-1.75-1.75Z"
		clip-rule="evenodd"
	/>
</svg>
