<script lang="ts" module>
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
		d="M6.75 5c0-.69.56-1.25 1.25-1.25h8c.69 0 1.25.56 1.25 1.25v14c0 .69-.56 1.25-1.25 1.25H8c-.69 0-1.25-.56-1.25-1.25zM8 2.25A2.75 2.75 0 0 0 5.25 5v14A2.75 2.75 0 0 0 8 21.75h8A2.75 2.75 0 0 0 18.75 19V5A2.75 2.75 0 0 0 16 2.25zm3.5 2.5a.75.75 0 0 0 0 1.5h1a.75.75 0 0 0 0-1.5z"
		clip-rule="evenodd"
	/>
</svg>
