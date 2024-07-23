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
		d="M9.25 2a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-1.25v1.532a8.75 8.75 0 1 1-1.5 0V2.75H10A.75.75 0 0 1 9.25 2ZM12 5.75a7.25 7.25 0 1 0 0 14.5 7.25 7.25 0 0 0 0-14.5Zm6.894-2.473a.75.75 0 1 0-1.061 1.061l2.828 2.828a.75.75 0 1 0 1.061-1.06l-2.828-2.829ZM12 6.75a6.25 6.25 0 1 0 0 12.5 6.25 6.25 0 0 0 0-12.5ZM9.25 15.5a.75.75 0 0 0 1.5 0v-5a.75.75 0 0 0-1.5 0v5Zm4.75.75a.75.75 0 0 1-.75-.75v-5a.75.75 0 0 1 1.5 0v5a.75.75 0 0 1-.75.75Z"
		clip-rule="evenodd"
	/>
</svg>
