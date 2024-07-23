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
		d="M7.105 7.997a2.25 2.25 0 0 1 1.552.17L10.323 9a3.75 3.75 0 0 0 3.354 0l1.666-.833c.48-.24 1.03-.3 1.552-.17l2.923.73a.75.75 0 0 0 .364-1.455l-2.923-.73a3.75 3.75 0 0 0-2.587.283l-1.666.833a2.25 2.25 0 0 1-2.012 0l-1.666-.833a3.75 3.75 0 0 0-2.587-.283l-2.923.73a.75.75 0 0 0 .364 1.456l2.923-.731Zm1.552 4.17a2.25 2.25 0 0 0-1.552-.17l-2.923.73a.75.75 0 0 1-.364-1.455l2.923-.73a3.75 3.75 0 0 1 2.587.284l1.666.832a2.25 2.25 0 0 0 2.012 0l1.666-.832a3.75 3.75 0 0 1 2.587-.284l2.923.73a.75.75 0 0 1-.364 1.456l-2.923-.731a2.25 2.25 0 0 0-1.552.17L13.677 13a3.75 3.75 0 0 1-3.354 0l-1.666-.833Zm0 4a2.25 2.25 0 0 0-1.552-.17l-2.923.73a.75.75 0 0 1-.364-1.455l2.923-.73a3.75 3.75 0 0 1 2.587.284l1.666.832a2.25 2.25 0 0 0 2.012 0l1.666-.832a3.75 3.75 0 0 1 2.587-.284l2.923.73a.75.75 0 0 1-.364 1.456l-2.923-.731a2.25 2.25 0 0 0-1.552.17L13.677 17a3.75 3.75 0 0 1-3.354 0l-1.666-.833Z"
		clip-rule="evenodd"
	/>
</svg>
