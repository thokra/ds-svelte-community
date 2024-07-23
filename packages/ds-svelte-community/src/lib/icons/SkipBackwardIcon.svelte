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
		d="M4 6.25a.75.75 0 0 1 .75.75v10a.75.75 0 0 1-1.5 0V7A.75.75 0 0 1 4 6.25Zm9.343.083A.75.75 0 0 1 13.75 7v2a.75.75 0 0 1-1.5 0v-.543L7.29 12l4.96 3.543V15a.75.75 0 0 1 1.5 0v2a.75.75 0 0 1-1.186.61l-7-5a.75.75 0 0 1 0-1.22l7-5a.75.75 0 0 1 .78-.057ZM20.75 7a.75.75 0 0 0-1.186-.61l-7 5a.75.75 0 0 0 0 1.22l7 5A.75.75 0 0 0 20.75 17V7Zm-1.5 8.543L14.29 12l4.96-3.543v7.086Z"
		clip-rule="evenodd"
	/>
</svg>
