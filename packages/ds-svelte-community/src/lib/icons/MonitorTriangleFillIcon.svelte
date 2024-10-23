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
		d="M16.656 2.136a.75.75 0 0 0-1.312 0l-5 9A.75.75 0 0 0 11 12.25h10a.75.75 0 0 0 .656-1.114zm5.094 11.839c0-.173-.172-.294-.341-.262q-.2.037-.409.037H11a2.25 2.25 0 0 1-1.967-3.343l3.77-6.786a.25.25 0 0 0-.219-.371H3.5c-.69 0-1.25.56-1.25 1.25v11c0 .69.56 1.25 1.25 1.25h7.75v2.5H6a.75.75 0 0 0 0 1.5h13a.75.75 0 0 0 0-1.5h-6.25v-2.5h7.75c.69 0 1.25-.56 1.25-1.25z"
		clip-rule="evenodd"
	/>
</svg>
