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
		d="M2.25 6A.75.75 0 0 1 3 5.25h10.8c3.935 0 7.2 2.858 7.838 6.611l.003.02.001.008c.071.427.108.865.108 1.311a2.55 2.55 0 0 1-2.55 2.55H3a.75.75 0 0 1-.75-.75V6Zm10 6c0 .414.336.75.75.75h7.235c.01.149.015.299.015.45 0 .58-.47 1.05-1.05 1.05H3.75v-7.5h8.5V12Zm7.7-.75a6.453 6.453 0 0 0-6.15-4.5h-.05v4.5h6.2ZM3 17.25a.75.75 0 0 0 0 1.5h18a.75.75 0 0 0 0-1.5H3Z"
		clip-rule="evenodd"
	/>
</svg>
