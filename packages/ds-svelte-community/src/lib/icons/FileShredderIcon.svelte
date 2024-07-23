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
		d="M6.5 3.25c-.69 0-1.25.56-1.25 1.25v6.75H4a.75.75 0 0 0 0 1.5h16a.75.75 0 0 0 0-1.5h-1.25V8a.75.75 0 0 0-.22-.53l-4-4a.75.75 0 0 0-.53-.22H6.5Zm6.75 4.25c0 .69.56 1.25 1.25 1.25h2.75v2.5H6.75v-6.5h6.5V7.5Zm2.94-.25-1.44-1.44v1.44h1.44ZM6.75 15a.75.75 0 0 0-1.5 0v5a.75.75 0 0 0 1.5 0v-5ZM9 14.25a.75.75 0 0 1 .75.75v5a.75.75 0 0 1-1.5 0v-5a.75.75 0 0 1 .75-.75Zm3.75.75a.75.75 0 0 0-1.5 0v5a.75.75 0 0 0 1.5 0v-5Zm2.25-.75a.75.75 0 0 1 .75.75v5a.75.75 0 0 1-1.5 0v-5a.75.75 0 0 1 .75-.75ZM18.75 20v-5a.75.75 0 0 0-1.5 0v5a.75.75 0 0 0 1.5 0Z"
		clip-rule="evenodd"
	/>
</svg>
