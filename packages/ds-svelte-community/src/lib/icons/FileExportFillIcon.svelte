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
		d="M13.25 7.5v-4a.25.25 0 0 0-.25-.25H6.5c-.69 0-1.25.56-1.25 1.25v15c0 .69.56 1.25 1.25 1.25h11c.69 0 1.25-.56 1.25-1.25v-3.835a.25.25 0 0 0-.427-.177L16.03 17.78a.75.75 0 1 1-1.06-1.061l1.543-1.543a.25.25 0 0 0-.177-.427H9.5a.75.75 0 1 1 0-1.5h6.836a.25.25 0 0 0 .177-.427L14.97 11.28a.75.75 0 0 1 1.06-1.061l2.293 2.293a.25.25 0 0 0 .427-.177V9a.25.25 0 0 0-.25-.25h-4c-.69 0-1.25-.56-1.25-1.25ZM15 7.25a.25.25 0 0 1-.25-.25V4.293a.25.25 0 0 1 .427-.177l2.707 2.707a.25.25 0 0 1-.177.427H15Z"
		clip-rule="evenodd"
	/>
</svg>
