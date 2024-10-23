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
		d="M4.25 4A.75.75 0 0 1 5 3.25h2a.75.75 0 0 1 .75.75v4.25H14A2.75 2.75 0 0 1 16.75 11v2.25H20a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75v-3c0-.69-.56-1.25-1.25-1.25H7A.75.75 0 0 1 6.25 9V4.75H5A.75.75 0 0 1 4.25 4M8 12.25a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5M2.75 16a5.25 5.25 0 1 1 10.5 0 5.25 5.25 0 0 1-10.5 0m13.5 2.5a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0m1.25-2.75a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5"
		clip-rule="evenodd"
	/>
</svg>
