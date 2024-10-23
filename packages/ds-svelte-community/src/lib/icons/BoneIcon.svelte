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
		d="M5.167 16.418c1.165 0 2.17-.682 2.637-1.668h8.335A2.917 2.917 0 1 0 21.277 12a2.917 2.917 0 1 0-5.139-2.75H7.805A2.917 2.917 0 1 0 2.665 12a2.917 2.917 0 0 0 2.502 4.418m15.026-2.917a1.417 1.417 0 0 1-2.798.325.75.75 0 0 0-.803-.576H7.35a.75.75 0 0 0-.803.576 1.418 1.418 0 1 1-2.402-1.307.75.75 0 0 0 0-1.039 1.417 1.417 0 1 1 2.403-1.306.75.75 0 0 0 .8.576h9.247a.75.75 0 0 0 .8-.576 1.418 1.418 0 1 1 2.403 1.306.75.75 0 0 0 0 1.04c.245.255.395.6.395.98"
		clip-rule="evenodd"
	/>
</svg>
