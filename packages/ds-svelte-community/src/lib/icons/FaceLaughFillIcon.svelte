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
		d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25m0 15.17c2.341 0 4.236-1.608 4.475-3.92h-8.95c.24 2.312 2.134 3.92 4.475 3.92M9.534 9.674a1.25 1.25 0 0 0-1.708.458.75.75 0 0 1-1.299-.75 2.75 2.75 0 0 1 3.757-1.007.75.75 0 0 1-.75 1.299m6.64.458a1.25 1.25 0 0 0-1.708-.458.75.75 0 1 1-.75-1.299 2.75 2.75 0 0 1 3.757 1.007.75.75 0 0 1-1.3.75"
		clip-rule="evenodd"
	/>
</svg>
