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
		d="M7.75 5c0-.966.784-1.75 1.75-1.75h5c.966 0 1.75.784 1.75 1.75v1.25H21a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0V7.75H3.75v4.5H7.5a.75.75 0 0 1 0 1.5H5.25v4.5H8.5a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75v-5.25H3a.75.75 0 0 1-.75-.75V7A.75.75 0 0 1 3 6.25h4.75V5Zm7 0v1.25h-5.5V5a.25.25 0 0 1 .25-.25h5a.25.25 0 0 1 .25.25Zm.25 5.75a4.25 4.25 0 1 0 0 8.5 4.25 4.25 0 0 0 0-8.5ZM9.25 15a5.75 5.75 0 1 1 11.5 0 5.75 5.75 0 0 1-11.5 0Zm6.5-2.5a.75.75 0 0 0-1.5 0V15c0 .199.079.39.22.53l1 1a.75.75 0 1 0 1.06-1.06l-.78-.78V12.5Z"
		clip-rule="evenodd"
	/>
</svg>
