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
		d="M3.75 6a1.25 1.25 0 1 1 2.5 0v2a.75.75 0 0 0 1.5 0V6a2.75 2.75 0 0 0-5.5 0v12c0 .966.784 1.75 1.75 1.75h5.5A1.75 1.75 0 0 0 11.25 18v-4.25h1.5V18c0 .966.784 1.75 1.75 1.75H20A1.75 1.75 0 0 0 21.75 18V6a2.75 2.75 0 1 0-5.5 0v2a.75.75 0 0 0 1.5 0V6a1.25 1.25 0 1 1 2.5 0v6.25H3.75z"
	/>
</svg>
