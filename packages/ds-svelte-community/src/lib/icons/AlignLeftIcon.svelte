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
		d="M4 3.25a.75.75 0 0 1 .75.75v16a.75.75 0 0 1-1.5 0V4A.75.75 0 0 1 4 3.25ZM6.25 6A.75.75 0 0 1 7 5.25h13a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-.75.75H7a.75.75 0 0 1-.75-.75V6Zm1.5.75v2.5h11.5v-2.5H7.75ZM7 13.25a.75.75 0 0 0-.75.75v4c0 .414.336.75.75.75h7a.75.75 0 0 0 .75-.75v-4a.75.75 0 0 0-.75-.75H7Zm.75 4v-2.5h5.5v2.5h-5.5Z"
		clip-rule="evenodd"
	/>
</svg>
