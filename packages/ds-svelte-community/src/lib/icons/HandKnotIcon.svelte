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
		d="M10 2.25a2.75 2.75 0 0 0-2.75 2.718 6.702 6.702 0 0 0-.667-.4c-.295-.152-.688-.318-1.083-.318a2.25 2.25 0 0 0 0 4.5c.395 0 .788-.166 1.083-.318a6.43 6.43 0 0 0 .667-.4v3.837l-.876-.75a2.721 2.721 0 0 0-3.948 3.699L7.4 21.45a.75.75 0 0 0 .6.3h11a.75.75 0 0 0 .732-.587l1.35-6.072a3.75 3.75 0 0 0-2.848-4.474L12.75 9.398V8.032c.212.143.44.284.667.4.294.152.688.318 1.083.318a2.25 2.25 0 0 0 0-4.5c-.395 0-.789.166-1.083.318a6.71 6.71 0 0 0-.667.4A2.75 2.75 0 0 0 10 2.25ZM8.75 5a1.25 1.25 0 1 1 2.5 0v.75h-2.5V5Zm3.088 5.732A.75.75 0 0 1 11.25 10V7.25h-2.5v6.25a.75.75 0 0 1-1.238.57l-2.114-1.812a1.221 1.221 0 0 0-1.772 1.66l4.75 6.332h10.023l1.218-5.484a2.25 2.25 0 0 0-1.708-2.685l-6.071-1.349Zm1.54-4.09a10.13 10.13 0 0 1-.192-.142l.191-.141a6.04 6.04 0 0 1 .726-.458c.113-.058.209-.099.286-.124a.516.516 0 0 1 .111-.027.75.75 0 1 1 0 1.5.458.458 0 0 1-.111-.027 2.022 2.022 0 0 1-.286-.124 6.04 6.04 0 0 1-.726-.458ZM6.813 6.5a10.236 10.236 0 0 0-.191-.141 6.033 6.033 0 0 0-.726-.458 2.023 2.023 0 0 0-.286-.124.515.515 0 0 0-.11-.027.75.75 0 0 0-.001 1.5c.004 0 .04-.003.111-.027.077-.025.173-.066.286-.124.227-.117.48-.281.726-.458.065-.047.13-.094.191-.141Z"
		clip-rule="evenodd"
	/>
</svg>
