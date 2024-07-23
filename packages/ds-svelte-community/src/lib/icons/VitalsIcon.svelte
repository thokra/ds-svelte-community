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
		d="M11.028 4.25a.75.75 0 0 1 .678.498l4.27 11.954 2.312-6.94A.75.75 0 0 1 19 9.25h2a.75.75 0 0 1 0 1.5h-1.46l-2.828 8.487a.75.75 0 0 1-1.418.015l-4.37-12.235-3.239 7.288a.75.75 0 0 1-1.356.03L4.536 10.75H3a.75.75 0 0 1 0-1.5h2a.75.75 0 0 1 .67.415l1.29 2.578 3.355-7.548a.75.75 0 0 1 .713-.444Z"
		clip-rule="evenodd"
	/>
</svg>
