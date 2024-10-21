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
		d="M12 3.75a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5ZM2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm7.144-4.138a.75.75 0 0 1 .356.638v7a.75.75 0 0 1-1.5 0V9.714l-.915.457a.75.75 0 1 1-.67-1.342l2-1a.75.75 0 0 1 .73.033ZM16.5 10c0 .656-.253 1.254-.667 1.7a2.75 2.75 0 1 1-3.666 0A2.5 2.5 0 1 1 16.5 10ZM14 9a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm-1.25 4.75a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0Z"
		clip-rule="evenodd"
	/>
</svg>
