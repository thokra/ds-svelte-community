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
		d="M3.25 4A.75.75 0 0 1 4 3.25h16a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-.75.75h-.25V19A1.75 1.75 0 0 1 18 20.75H6A1.75 1.75 0 0 1 4.25 19V8.75H4A.75.75 0 0 1 3.25 8V4Zm2.5 4.75h12.5V19a.25.25 0 0 1-.25.25H6a.25.25 0 0 1-.25-.25V8.75Zm-1-4v2.5h14.5v-2.5H4.75Zm9.25 8.5a.75.75 0 0 0 0-1.5h-4a.75.75 0 0 0 0 1.5h4Z"
		clip-rule="evenodd"
	/>
</svg>
