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
		d="M5.25 5.5A.25.25 0 0 0 5 5.25H3a.75.75 0 0 0-.75.75v2c0 .138.112.25.25.25H3A2.25 2.25 0 0 0 5.25 6v-.5ZM2.5 9.75a.25.25 0 0 0-.25.25v4c0 .138.112.25.25.25H3A3.75 3.75 0 0 1 6.75 18v.5c0 .138.112.25.25.25h10a.25.25 0 0 0 .25-.25V18A3.75 3.75 0 0 1 21 14.25h.5a.25.25 0 0 0 .25-.25v-4a.25.25 0 0 0-.25-.25H21A3.75 3.75 0 0 1 17.25 6v-.5a.25.25 0 0 0-.25-.25H7a.25.25 0 0 0-.25.25V6A3.75 3.75 0 0 1 3 9.75h-.5ZM5.25 18v.5a.25.25 0 0 1-.25.25H3a.75.75 0 0 1-.75-.75v-2a.25.25 0 0 1 .25-.25H3A2.25 2.25 0 0 1 5.25 18Zm13.5.5c0 .138.112.25.25.25h2a.75.75 0 0 0 .75-.75v-2a.25.25 0 0 0-.25-.25H21A2.25 2.25 0 0 0 18.75 18v.5Zm3-12.5v2a.25.25 0 0 1-.25.25H21A2.25 2.25 0 0 1 18.75 6v-.5a.25.25 0 0 1 .25-.25h2a.75.75 0 0 1 .75.75Zm-11.5 6c0-1.376.906-2.25 1.75-2.25s1.75.874 1.75 2.25c0 1.377-.906 2.25-1.75 2.25s-1.75-.873-1.75-2.25ZM12 8.25c-1.917 0-3.25 1.813-3.25 3.75s1.333 3.75 3.25 3.75 3.25-1.813 3.25-3.75S13.917 8.25 12 8.25Z"
		clip-rule="evenodd"
	/>
</svg>
