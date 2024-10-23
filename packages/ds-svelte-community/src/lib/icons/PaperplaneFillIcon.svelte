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
		d="M6.317 4.32a.75.75 0 0 0-1.023.932l2.023 5.666a.5.5 0 0 0 .471.332H13a.75.75 0 0 1 0 1.5H7.788a.5.5 0 0 0-.47.332l-2.024 5.666a.75.75 0 0 0 1.023.932l15-7a.75.75 0 0 0 0-1.36z"
		clip-rule="evenodd"
	/>
</svg>
