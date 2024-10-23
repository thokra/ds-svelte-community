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
		d="M3.75 7.5a5.25 5.25 0 1 1 10.5 0 5.25 5.25 0 0 1-10.5 0m.477 8.727A6.75 6.75 0 0 1 15.75 21a.75.75 0 0 1-.75.75H3a.75.75 0 0 1-.75-.75 6.75 6.75 0 0 1 1.977-4.773m13.037 3.023a.255.255 0 0 1-.247-.196 8.25 8.25 0 0 0-4.302-5.42.28.28 0 0 1-.026-.48A6.74 6.74 0 0 0 15.75 7.5a6.7 6.7 0 0 0-.43-2.375c-.065-.173.065-.362.248-.337a4.25 4.25 0 0 1 .978 8.172 5.75 5.75 0 0 1 4.204 5.54.75.75 0 0 1-.75.75z"
		clip-rule="evenodd"
	/>
</svg>
