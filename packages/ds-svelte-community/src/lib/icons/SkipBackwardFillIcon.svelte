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
		d="M4 6.25a.75.75 0 0 0-.75.75v10a.75.75 0 0 0 1.5 0V7A.75.75 0 0 0 4 6.25m9.75 3.064-1.767 1.262a1.75 1.75 0 0 0 0 2.848l1.767 1.262V17a.75.75 0 0 1-1.186.61l-7-5a.75.75 0 0 1 0-1.22l7-5A.75.75 0 0 1 13.75 7zm5.814-2.924A.75.75 0 0 1 20.75 7v10a.75.75 0 0 1-1.186.61l-7-5a.75.75 0 0 1 0-1.22z"
		clip-rule="evenodd"
	/>
</svg>
