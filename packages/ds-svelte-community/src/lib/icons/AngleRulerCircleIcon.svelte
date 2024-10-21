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
		d="M8.269 6.992A9.75 9.75 0 0 1 21.75 16a.75.75 0 0 1-.75.75H3a.75.75 0 0 1-.75-.75 9.75 9.75 0 0 1 6.019-9.008Zm9.822 8.258V14a.75.75 0 1 0-1.5 0v1.25h-2.06V14a.75.75 0 0 0-1.5 0v1.25H10.97V14a.75.75 0 0 0-1.5 0v1.25H7.41V14a.75.75 0 1 0-1.5 0v1.25H3.783a8.25 8.25 0 0 1 16.432 0H18.09Z"
		clip-rule="evenodd"
	/>
</svg>
