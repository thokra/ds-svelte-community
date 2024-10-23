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
		d="M10.094 3.656a.75.75 0 1 0-1.5-.061l-.19 4.655H5a.75.75 0 0 0 0 1.5h3.342l-.185 4.5H4a.75.75 0 1 0 0 1.5h4.095l-.189 4.594a.75.75 0 1 0 1.5.061l.19-4.655h4.5l-.19 4.594a.75.75 0 1 0 1.5.061l.19-4.655H19a.75.75 0 0 0 0-1.5h-3.342l.185-4.5H20a.75.75 0 0 0 0-1.5h-4.095l.189-4.594a.75.75 0 1 0-1.5-.061l-.19 4.655h-4.5zm4.063 10.594.185-4.5H9.843l-.185 4.5z"
		clip-rule="evenodd"
	/>
</svg>
