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
		d="M7.5 8.25a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3m6 1.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0m0 4.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0m-4.5 0a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0m7.5-6a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3m1.5 6a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0"
		clip-rule="evenodd"
	/>
</svg>
