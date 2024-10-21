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
		d="M10 1.25a.75.75 0 0 0 0 1.5h1.25v1.532a8.75 8.75 0 1 0 1.5 0V2.75H14a.75.75 0 0 0 0-1.5h-4Zm2 4.5a7.25 7.25 0 1 0 0 14.5 7.25 7.25 0 0 0 0-14.5ZM5.75 13a6.25 6.25 0 1 1 12.5 0 6.25 6.25 0 0 1-12.5 0Zm12.083-9.723a.75.75 0 0 1 1.06 0l2.829 2.829a.75.75 0 0 1-1.06 1.06l-2.829-2.828a.75.75 0 0 1 0-1.06Z"
		clip-rule="evenodd"
	/>
</svg>
