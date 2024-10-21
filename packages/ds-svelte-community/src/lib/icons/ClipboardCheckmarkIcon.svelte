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
		d="M8.25 3A.75.75 0 0 1 9 2.25h6a.75.75 0 0 1 .75.75v1.25H18a.75.75 0 0 1 .75.75v16a.75.75 0 0 1-.75.75H6a.75.75 0 0 1-.75-.75V5A.75.75 0 0 1 6 4.25h2.25V3Zm7.5 3a.75.75 0 0 1-.75.75H9A.75.75 0 0 1 8.25 6v-.25h-1.5v14.5h10.5V5.75h-1.5V6Zm-1.5-.75h-4.5v-1.5h4.5v1.5Zm.28 7.03a.75.75 0 1 0-1.06-1.06l-1.97 1.97-.97-.97a.75.75 0 1 0-1.06 1.06l1.5 1.5a.75.75 0 0 0 1.06 0l2.5-2.5Z"
		clip-rule="evenodd"
	/>
</svg>
