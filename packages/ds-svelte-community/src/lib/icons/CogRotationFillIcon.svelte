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
		d="M8.268 2.992A9.75 9.75 0 0 1 21.75 12a.75.75 0 0 1-1.5 0A8.25 8.25 0 0 0 4.855 7.875a.75.75 0 0 1-1.4-.375V3a.75.75 0 1 1 1.5 0v2.259a9.75 9.75 0 0 1 3.313-2.267Zm3.11 3.258a.75.75 0 0 0-.637.354l-.586.94-1.09-.253a.75.75 0 0 0-.7.2l-.873.873a.75.75 0 0 0-.2.7l.253 1.09-.941.587a.75.75 0 0 0-.354.636v1.246c0 .259.134.5.354.636l.94.586-.253 1.09a.75.75 0 0 0 .2.7l.873.874a.75.75 0 0 0 .7.2l1.09-.254.587.941a.75.75 0 0 0 .636.354h1.246a.75.75 0 0 0 .636-.354l.586-.94 1.09.253a.75.75 0 0 0 .7-.2l.874-.873a.75.75 0 0 0 .2-.7l-.254-1.09.941-.587a.75.75 0 0 0 .354-.636v-1.246a.75.75 0 0 0-.354-.636l-.94-.586.253-1.09a.75.75 0 0 0-.2-.7l-.873-.873a.75.75 0 0 0-.7-.2l-1.09.253-.587-.941a.75.75 0 0 0-.636-.354h-1.246ZM12 11a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm-8.25 1a.75.75 0 0 0-1.5 0 9.75 9.75 0 0 0 16.794 6.741V21a.75.75 0 0 0 1.5 0v-4.5a.75.75 0 0 0-1.4-.375A8.25 8.25 0 0 1 3.75 12Z"
		clip-rule="evenodd"
	/>
</svg>
