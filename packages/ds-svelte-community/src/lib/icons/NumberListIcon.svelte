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
		d="M5.25 5a.75.75 0 0 0-1.166-.624l-1.5 1a.75.75 0 1 0 .832 1.248l.334-.223V9.75H3a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5h-.75V5Zm-.75 9.25a.75.75 0 0 0-.75.75.75.75 0 0 1-1.5 0 2.25 2.25 0 0 1 2.25-2.25h.04a2.21 2.21 0 0 1 1.678 3.648L4.631 18.25H6a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.57-1.238l2.65-3.09a.71.71 0 0 0-.54-1.172H4.5Zm4.5 3a.75.75 0 0 0 0 1.5h12a.75.75 0 0 0 0-1.5H9ZM8.25 12a.75.75 0 0 1 .75-.75h12a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75ZM9 5.25a.75.75 0 0 0 0 1.5h12a.75.75 0 0 0 0-1.5H9Z"
		clip-rule="evenodd"
	/>
</svg>
