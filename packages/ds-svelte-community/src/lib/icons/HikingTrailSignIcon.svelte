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
		d="M11.5 2.25a.75.75 0 0 1 .75.75v2.25H17a.75.75 0 0 1 .6.3l3 4c.2.267.2.633 0 .9l-3 4a.75.75 0 0 1-.6.3h-4.75V21a.75.75 0 0 1-1.5 0v-6.25H4a.75.75 0 0 1-.6-1.2L6.063 10 3.4 6.45a.75.75 0 0 1 .6-1.2h6.75V3a.75.75 0 0 1 .75-.75m-3.9 8.2-2.1 2.8h11.125L19.063 10l-2.438-3.25H5.5l2.1 2.8c.2.267.2.633 0 .9"
		clip-rule="evenodd"
	/>
</svg>
