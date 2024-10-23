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
		d="M4.25 7c0-.966.784-1.75 1.75-1.75h12c.966 0 1.75.784 1.75 1.75v3a.25.25 0 0 1-.25.25h-2.25A.25.25 0 0 1 17 10V9a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v1a.25.25 0 0 1-.25.25h-1.5A.25.25 0 0 1 11 10V9a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v1a.25.25 0 0 1-.25.25H4.5a.25.25 0 0 1-.25-.25zM4 11.25A1.75 1.75 0 0 0 2.25 13v5.5c0 .414.336.75.75.75h18a.75.75 0 0 0 .75-.75V13A1.75 1.75 0 0 0 20 11.25z"
		clip-rule="evenodd"
	/>
</svg>
