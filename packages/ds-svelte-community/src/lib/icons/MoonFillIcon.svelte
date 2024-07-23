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
		d="M14.824 3.115a.75.75 0 0 1 .81-.165A9.753 9.753 0 0 1 21.75 12 9.75 9.75 0 0 1 12 21.75a9.753 9.753 0 0 1-9.05-6.116.75.75 0 0 1 .975-.976A8.25 8.25 0 0 0 14.658 3.925a.75.75 0 0 1 .166-.81Z"
		clip-rule="evenodd"
	/>
</svg>
