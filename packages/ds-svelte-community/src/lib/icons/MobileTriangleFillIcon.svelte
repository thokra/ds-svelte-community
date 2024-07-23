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
		d="M16.656 1.636a.75.75 0 0 0-1.312 0l-5 9A.75.75 0 0 0 11 11.75h10a.75.75 0 0 0 .656-1.114l-5-9ZM18.5 13.25a.25.25 0 0 1 .25.25V19A2.75 2.75 0 0 1 16 21.75H8A2.75 2.75 0 0 1 5.25 19V5A2.75 2.75 0 0 1 8 2.25h4.862a.25.25 0 0 1 .219.371L9.033 9.907A2.25 2.25 0 0 0 11 13.25h7.5Z"
		clip-rule="evenodd"
	/>
</svg>
