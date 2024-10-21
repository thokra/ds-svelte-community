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
		d="M7 2.25a.75.75 0 0 0-.75.75v7.5c0 .414.336.75.75.75h10a.75.75 0 0 0 .75-.75V3a.75.75 0 0 0-.75-.75H7Zm.75 7.5v-6h8.5v6h-8.5Zm-.75 3a.75.75 0 0 0-.75.75V21c0 .414.336.75.75.75h10a.75.75 0 0 0 .75-.75v-7.5a.75.75 0 0 0-.75-.75H7Zm.75 7.5v-6h8.5v6h-8.5Z"
		clip-rule="evenodd"
	/>
</svg>
