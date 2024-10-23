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
		d="M18.824 3.27a.766.766 0 0 1 .926.75V13a7.75 7.75 0 0 1-15.5 0V4.02c0-.488.45-.851.926-.75l.367.08c4.256.911 8.658.911 12.914 0zM8.25 11.5c0-.69.56-1.25 1.25-1.25h.25V9.5a2.25 2.25 0 0 1 4.5 0v.75h.25c.69 0 1.25.56 1.25 1.25V15a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75zm4.5-1.25V9.5a.75.75 0 0 0-1.5 0v.75zm-3 1.5v2.5h4.5v-2.5z"
		clip-rule="evenodd"
	/>
</svg>
