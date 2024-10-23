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
		d="M8.25 7.5A3.75 3.75 0 1 1 9 9.75h1.5a.75.75 0 0 0 0-1.5H8.325a4 4 0 0 1-.075-.75M12 12.75a5.25 5.25 0 0 1-4.745-3H5A.75.75 0 0 1 4.25 9V6.5a.75.75 0 0 1 1.5 0v1.75h1.053A5.25 5.25 0 1 1 12 12.75m-3.712 4.538A5.25 5.25 0 0 1 17.25 21a.75.75 0 0 0 1.5 0 6.75 6.75 0 0 0-13.5 0 .75.75 0 0 0 1.5 0 5.25 5.25 0 0 1 1.538-3.712M19.75 6.5a.75.75 0 0 0-1.5 0v2a.75.75 0 0 0 1.5 0z"
		clip-rule="evenodd"
	/>
</svg>
