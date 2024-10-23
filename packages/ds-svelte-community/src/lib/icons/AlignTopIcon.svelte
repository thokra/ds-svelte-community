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
		d="M20.75 4a.75.75 0 0 1-.75.75H4a.75.75 0 0 1 0-1.5h16a.75.75 0 0 1 .75.75M10 6.25a.75.75 0 0 1 .75.75v13a.75.75 0 0 1-.75.75H6a.75.75 0 0 1-.75-.75V7A.75.75 0 0 1 6 6.25zm-.75 1.5h-2.5v11.5h2.5zm9.5-.75a.75.75 0 0 0-.75-.75h-4a.75.75 0 0 0-.75.75v7c0 .414.336.75.75.75h4a.75.75 0 0 0 .75-.75zm-4 .75h2.5v5.5h-2.5z"
		clip-rule="evenodd"
	/>
</svg>
