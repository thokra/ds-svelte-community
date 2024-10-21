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
		d="M5 3.25A1.75 1.75 0 0 0 3.25 5v10a.75.75 0 0 0 1.085.67l1.502-.75a.75.75 0 0 0 .414-.67V8.5a2.25 2.25 0 0 1 2.25-2.25H17a.75.75 0 0 0 .75-.75V5A1.75 1.75 0 0 0 16 3.25H5ZM7.25 9c0-.966.784-1.75 1.75-1.75h10c.966 0 1.75.784 1.75 1.75v11a.75.75 0 0 1-1.085.67l-3.842-1.92H9A1.75 1.75 0 0 1 7.25 17V9Zm3 4a.75.75 0 0 1 .75-.75h.01a.75.75 0 0 1 0 1.5H11a.75.75 0 0 1-.75-.75Zm3.75-.75a.75.75 0 0 0 0 1.5h.01a.75.75 0 0 0 0-1.5H14Zm2.25.75a.75.75 0 0 1 .75-.75h.01a.75.75 0 0 1 0 1.5H17a.75.75 0 0 1-.75-.75Z"
		clip-rule="evenodd"
	/>
</svg>
