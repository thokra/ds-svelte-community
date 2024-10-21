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
		d="M4 5.75a.25.25 0 1 0 0 .5.25.25 0 0 0 0-.5ZM2.25 6a1.75 1.75 0 1 1 3.5 0 1.75 1.75 0 0 1-3.5 0Zm1.5 6a.25.25 0 1 1 .5 0 .25.25 0 0 1-.5 0ZM4 10.25a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5ZM3.75 18a.25.25 0 1 1 .5 0 .25.25 0 0 1-.5 0ZM4 16.25a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5Zm5 1a.75.75 0 0 0 0 1.5h12a.75.75 0 0 0 0-1.5H9ZM8.25 12a.75.75 0 0 1 .75-.75h12a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75ZM9 5.25a.75.75 0 0 0 0 1.5h12a.75.75 0 0 0 0-1.5H9Z"
		clip-rule="evenodd"
	/>
</svg>
