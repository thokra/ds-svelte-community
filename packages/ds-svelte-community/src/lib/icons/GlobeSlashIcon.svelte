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
		d="M2.25 12c0-1.09.179-2.14.51-3.118a.8.8 0 0 1 .09-.255 9.754 9.754 0 0 1 15.494-4.031L19.47 3.47a.75.75 0 1 1 1.06 1.06l-16 16a.75.75 0 0 1-1.06-1.06l1.126-1.126a9.7 9.7 0 0 1-1.746-2.97.8.8 0 0 1-.09-.257A9.7 9.7 0 0 1 2.25 12m1.5 0c0-.78.108-1.535.31-2.25h4.18a34.5 34.5 0 0 0 0 4.5H4.06A8.3 8.3 0 0 1 3.75 12m1.91 5.28 1.53-1.53H4.65c.28.548.62 1.06 1.01 1.53m4.03-4.03 3.5-3.5H9.742a33 33 0 0 0-.053 3.5m5.842-5.843L17.28 5.66a8.2 8.2 0 0 0-2.268-1.343c.216 1.052.39 2.079.521 3.09M8.99 4.317a41 41 0 0 0-.621 3.933h-3.72a8.28 8.28 0 0 1 4.34-3.934m1.63-.452a41 41 0 0 0-.742 4.385h4.245a41 41 0 0 0-.742-4.385 8.3 8.3 0 0 0-2.76 0"
		clip-rule="evenodd"
	/>
</svg>
