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
		d="M6.065 4.265a9.75 9.75 0 1 1 10.81 16.179.75.75 0 0 1-1.024-.275l-3.15-5.456a.75.75 0 0 1 .274-1.024 1.95 1.95 0 1 0-1.95 0 .75.75 0 0 1 .274 1.024L8.15 20.17a.75.75 0 0 1-1.024.275 9.75 9.75 0 0 1-1.06-16.18Z"
		clip-rule="evenodd"
	/>
</svg>
