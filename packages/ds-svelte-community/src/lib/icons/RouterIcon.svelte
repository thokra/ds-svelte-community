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
		d="M6.165 6.168A8.222 8.222 0 0 1 12 3.75c2.28 0 4.342.923 5.836 2.418a.75.75 0 0 0 1.06-1.06A9.722 9.722 0 0 0 12 2.25a9.722 9.722 0 0 0-6.896 2.858.75.75 0 1 0 1.06 1.06ZM12 7.75a4.234 4.234 0 0 0-3.007 1.246.75.75 0 1 1-1.06-1.06A5.734 5.734 0 0 1 12 6.25c1.588 0 3.028.645 4.067 1.686a.75.75 0 0 1-1.06 1.06A4.235 4.235 0 0 0 12 7.75ZM14.25 12a2.25 2.25 0 0 1-1.5 2.122v5.128H16a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1 0-1.5h3.25v-5.128a2.251 2.251 0 1 1 3-2.122ZM12 11.25a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Z"
		clip-rule="evenodd"
	/>
</svg>
