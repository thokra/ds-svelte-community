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
		d="M13.5 3.75a.75.75 0 0 1 .75.75v4.19l4.72-4.72a.75.75 0 1 1 1.06 1.06l-4.72 4.72h4.19a.75.75 0 0 1 0 1.5h-6a.75.75 0 0 1-.75-.75v-6a.75.75 0 0 1 .75-.75M3.75 13.5a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-1.5 0v-4.19l-4.72 4.72a.75.75 0 0 1-1.06-1.06l4.72-4.72H4.5a.75.75 0 0 1-.75-.75"
		clip-rule="evenodd"
	/>
</svg>
