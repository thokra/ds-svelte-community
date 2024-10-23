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
		d="M3 5.25a.75.75 0 0 0-.75.75v10.5c0 .414.336.75.75.75h2.458a2.5 2.5 0 0 0 4.584 0h3.916a2.5 2.5 0 0 0 4.584 0H21a.75.75 0 0 0 .75-.75V6a.75.75 0 0 0-.75-.75zm14 7.5a.75.75 0 0 1-.75-.75V6.75H3.75v9H5.3a2.5 2.5 0 0 1 4.9 0h3.6a2.5 2.5 0 0 1 4.9 0h1.55v-3zm-9.25 2.5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m8.5 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2m4-4h-2.5v-4.5h2.5z"
		clip-rule="evenodd"
	/>
</svg>
