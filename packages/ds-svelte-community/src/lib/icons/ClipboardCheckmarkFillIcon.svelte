<script lang="ts" context="module">
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
		d="M9.5 2.25a.75.75 0 0 0-.75.75v2.5c0 .414.336.75.75.75h5a.75.75 0 0 0 .75-.75V3a.75.75 0 0 0-.75-.75h-5Zm-2 2H6a.75.75 0 0 0-.75.75v16c0 .414.336.75.75.75h12a.75.75 0 0 0 .75-.75V5a.75.75 0 0 0-.75-.75h-1.5a.25.25 0 0 0-.25.25v2a.75.75 0 0 1-.75.75h-7a.75.75 0 0 1-.75-.75v-2a.25.25 0 0 0-.25-.25Zm7.03 7.72a.75.75 0 0 1 0 1.06l-2.5 2.5a.75.75 0 0 1-1.06 0l-1.5-1.5a.75.75 0 1 1 1.06-1.06l.793.793a.25.25 0 0 0 .354 0l1.793-1.793a.75.75 0 0 1 1.06 0Z"
		clip-rule="evenodd"
	/>
</svg>
