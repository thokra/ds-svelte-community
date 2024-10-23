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
		d="M11 2.25A5.75 5.75 0 0 0 5.25 8c0 .052-.017.1-.074.157a.66.66 0 0 1-.325.158A3.25 3.25 0 0 0 5.5 14.75h4a.25.25 0 0 0 .25-.25V11a2.25 2.25 0 0 1 4.5 0v3.5c0 .138.112.25.25.25h2.75a4.5 4.5 0 1 0 0-9h-.745c-.09 0-.236-.066-.33-.26A5.75 5.75 0 0 0 11 2.25m1 8a.75.75 0 0 1 .75.75v7.69l2.22-2.22a.75.75 0 1 1 1.06 1.06l-3.5 3.5a.75.75 0 0 1-1.06 0l-3.5-3.5a.75.75 0 1 1 1.06-1.06l2.22 2.22V11a.75.75 0 0 1 .75-.75"
		clip-rule="evenodd"
	/>
</svg>
