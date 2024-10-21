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
		d="M11.47 1.57a.75.75 0 0 1 1.06 0l9.9 9.9a.75.75 0 0 1 0 1.06l-9.9 9.9a.75.75 0 0 1-1.06 0l-9.9-9.9a.75.75 0 0 1 0-1.06l9.9-9.9ZM3.16 12 12 20.839 20.838 12 12 3.161l-8.839 8.84Z"
		clip-rule="evenodd"
	/>
</svg>
