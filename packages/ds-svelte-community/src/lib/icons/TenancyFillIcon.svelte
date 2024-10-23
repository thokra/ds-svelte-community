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
		d="M8.25 7a3.75 3.75 0 1 1 5.07 3.51l3.692 4.923a2.75 2.75 0 1 1-1.2.9L12.75 12.25v3.104a2.751 2.751 0 1 1-1.5 0V12.25l-3.062 4.083a2.75 2.75 0 1 1-1.2-.9l3.691-4.922A3.75 3.75 0 0 1 8.25 7"
	/>
</svg>
