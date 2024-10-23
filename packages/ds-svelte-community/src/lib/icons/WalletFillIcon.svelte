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
		d="M16.67 2.665a.75.75 0 0 0-.867-.388l-4.519 1.232c-.281.077-.226.491.066.491h5.584a.25.25 0 0 0 .224-.362zM4 5.25A1.75 1.75 0 0 0 2.25 7v11c0 .966.784 1.75 1.75 1.75h15A1.75 1.75 0 0 0 20.75 18v-1.25a.25.25 0 0 0-.25-.25h-5.154q-.105 0-.208-.01a4.3 4.3 0 0 1-1.666-.479 3.6 3.6 0 0 1-1.375-1.268c-.39-.62-.597-1.373-.597-2.243s.208-1.622.597-2.242a3.6 3.6 0 0 1 1.376-1.27A4.3 4.3 0 0 1 15.35 8.5h5.15a.25.25 0 0 0 .25-.25V7A1.75 1.75 0 0 0 19 5.25zM20 10h-4.647S13 10 13 12.5s2.353 2.5 2.353 2.5H20a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1m-4.5 1.75a.75.75 0 0 0 0 1.5h.01a.75.75 0 0 0 0-1.5z"
		clip-rule="evenodd"
	/>
</svg>
