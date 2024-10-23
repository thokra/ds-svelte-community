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
		d="M4.25 7.169a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0m7 3a4.75 4.75 0 1 1 9.5 0 4.75 4.75 0 0 1-9.5 0M7 11.419a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5"
		clip-rule="evenodd"
	/>
</svg>
