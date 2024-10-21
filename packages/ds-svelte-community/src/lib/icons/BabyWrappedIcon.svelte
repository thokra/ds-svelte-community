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
		d="M6.25 8a5.75 5.75 0 1 1 11.5 0v8a5.75 5.75 0 0 1-11.5 0V8ZM12 3.75a4.25 4.25 0 1 0 0 8.5 4.25 4.25 0 0 0 0-8.5Zm0 10a5.735 5.735 0 0 1-4.25-1.877v1.686l3.85 2.14 4.65-3.1v-.726A5.735 5.735 0 0 1 12 13.75Zm-4.25 1.525 2.447 1.359-1.974 1.316A4.232 4.232 0 0 1 7.75 16v-.725Zm8.5-.874-7.111 4.741A4.25 4.25 0 0 0 16.25 16v-1.599ZM9.75 8a.75.75 0 0 1 .75-.75h.01a.75.75 0 0 1 0 1.5h-.01A.75.75 0 0 1 9.75 8Zm3 0a.75.75 0 0 1 .75-.75h.01a.75.75 0 0 1 0 1.5h-.01a.75.75 0 0 1-.75-.75Z"
		clip-rule="evenodd"
	/>
</svg>
