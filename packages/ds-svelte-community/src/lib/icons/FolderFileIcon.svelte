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
		d="M7.75 3.75V7.5a.75.75 0 0 1-1.5 0v-4c0-.69.56-1.25 1.25-1.25h9c.69 0 1.25.56 1.25 1.25v7a.75.75 0 0 1-1.5 0V3.75h-8.5Zm-1.75 7a.25.25 0 0 0-.25.25v9.25h12.5v-6.5H12a.75.75 0 0 1-.75-.75v-2a.25.25 0 0 0-.25-.25H6ZM4.25 11c0-.966.784-1.75 1.75-1.75h5c.966 0 1.75.784 1.75 1.75v1.25h5.75c.69 0 1.25.56 1.25 1.25v7c0 .69-.56 1.25-1.25 1.25h-13c-.69 0-1.25-.56-1.25-1.25V11ZM10 4.75a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5h-4Z"
		clip-rule="evenodd"
	/>
</svg>
