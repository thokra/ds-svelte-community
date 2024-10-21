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
		d="m18.19 4.75-8.72 8.72a.75.75 0 1 0 1.06 1.06l8.72-8.72v5.69a.75.75 0 0 0 1.5 0V4a.747.747 0 0 0-.75-.75h-7.5a.75.75 0 0 0 0 1.5h5.69ZM8.408 15.591a2.25 2.25 0 0 0 3.182 0l4.305-4.305a.5.5 0 0 1 .854.353V19A1.75 1.75 0 0 1 15 20.75H5A1.75 1.75 0 0 1 3.25 19V9c0-.966.784-1.75 1.75-1.75h7.361a.5.5 0 0 1 .354.854l-4.306 4.305a2.25 2.25 0 0 0 0 3.182Z"
		clip-rule="evenodd"
	/>
</svg>
