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
		d="M12 3.75a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5ZM6.75 7.5a5.25 5.25 0 1 1 10.5 0 5.25 5.25 0 0 1-10.5 0ZM12 15.75A5.25 5.25 0 0 0 6.75 21a.75.75 0 0 1-1.5 0 6.75 6.75 0 0 1 7.313-6.726.75.75 0 0 1-.126 1.494A5.258 5.258 0 0 0 12 15.75Zm4.584-1.374a.75.75 0 0 1 .832 0l3 2a.75.75 0 0 1 .334.624v4a.75.75 0 0 1-.75.75h-6a.75.75 0 0 1-.75-.75v-4a.75.75 0 0 1 .334-.624l3-2Zm-1.834 3.838 1.915.957a.75.75 0 0 0 .67 0l1.915-.957v2.036h-4.5v-2.037ZM17 15.9l1.509 1.006-1.509.755-1.509-.755L17 15.901Z"
		clip-rule="evenodd"
	/>
</svg>
