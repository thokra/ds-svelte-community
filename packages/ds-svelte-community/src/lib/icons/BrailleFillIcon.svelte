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
		d="M5.5 6a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm0 5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM12 4.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3ZM15.5 6a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm-2.149 3.25c-1.112 0-1.998.91-1.998 2.013v2.909a1.888 1.888 0 0 0-2.55.128 1.922 1.922 0 0 0-.237 2.405l2.443 3.708a.75.75 0 0 0 .626.337h6.423a.75.75 0 0 0 .719-.537l.858-2.895c.457-1.543-.494-3.164-2.076-3.484l-2.21-.447v-2.124a2.006 2.006 0 0 0-1.998-2.013Z"
		clip-rule="evenodd"
	/>
</svg>
