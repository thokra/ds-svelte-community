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
		d="M15.005 3.338a.75.75 0 0 0-1.06 0l-9.9 9.9a1.75 1.75 0 0 0 0 2.474l4.242 4.243a1.75 1.75 0 0 0 2.475 0l9.9-9.9a.75.75 0 0 0 0-1.06l-5.657-5.657ZM7.05 12.354l7.425-7.425 4.596 4.596-7.425 7.425-4.596-4.596Zm-1.06 1.06-.885.884a.25.25 0 0 0 0 .354l4.243 4.242a.25.25 0 0 0 .354 0l.883-.884-4.596-4.596Z"
		clip-rule="evenodd"
	/>
</svg>
