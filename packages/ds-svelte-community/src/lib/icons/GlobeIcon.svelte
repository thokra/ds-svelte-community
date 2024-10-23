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
		d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12m6.74-7.683A8.28 8.28 0 0 0 4.65 8.25h3.719a41 41 0 0 1 .62-3.934m1.63-.452a41 41 0 0 0-.742 4.385h4.245a41 41 0 0 0-.743-4.385 8.3 8.3 0 0 0-2.76 0M8.24 14.25a34.5 34.5 0 0 1 0-4.5H4.06A8.3 8.3 0 0 0 3.75 12c0 .78.108 1.535.31 2.25zm1.503 0a33 33 0 0 1 0-4.5h4.514c.103 1.51.103 2.997 0 4.5zm-.754 5.433a41 41 0 0 1-.62-3.933h-3.72a8.28 8.28 0 0 0 4.34 3.933m1.631.452a41 41 0 0 1-.743-4.385h4.246a41 41 0 0 1-.743 4.385 8.3 8.3 0 0 1-2.76 0m5.141-5.885c.098-1.502.098-2.99 0-4.5h4.179c.202.715.31 1.47.31 2.25a8.3 8.3 0 0 1-.31 2.25zm-.75-9.933a8.28 8.28 0 0 1 4.34 3.933h-3.72a41 41 0 0 0-.62-3.933m0 15.366a41 41 0 0 0 .62-3.933h3.72a8.28 8.28 0 0 1-4.34 3.933"
		clip-rule="evenodd"
	/>
</svg>
