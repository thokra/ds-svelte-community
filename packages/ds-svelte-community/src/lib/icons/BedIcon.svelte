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
		d="M2.25 13c0-.966.784-1.75 1.75-1.75h.25V7c0-.966.784-1.75 1.75-1.75h12c.966 0 1.75.784 1.75 1.75v4.25H20c.966 0 1.75.784 1.75 1.75v5.5a.75.75 0 0 1-1.5 0V13a.25.25 0 0 0-.25-.25H4a.25.25 0 0 0-.25.25v5.5a.75.75 0 0 1-1.5 0zm3.5-6A.25.25 0 0 1 6 6.75h12a.25.25 0 0 1 .25.25v4.25h-.5V10A1.75 1.75 0 0 0 16 8.25h-2A1.75 1.75 0 0 0 12.25 10v1.25h-.5V10A1.75 1.75 0 0 0 10 8.25H8A1.75 1.75 0 0 0 6.25 10v1.25h-.5zM14 9.75a.25.25 0 0 0-.25.25v1.25h2.5V10a.25.25 0 0 0-.25-.25zm-4 0a.25.25 0 0 1 .25.25v1.25h-2.5V10A.25.25 0 0 1 8 9.75z"
		clip-rule="evenodd"
	/>
</svg>
