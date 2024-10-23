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
		d="M2.25 6A.75.75 0 0 1 3 5.25h15.778a.75.75 0 0 1 .728.57l2.222 9a.75.75 0 0 1-.728.93H3a.75.75 0 0 1-.75-.75zm11 6c0 .414.336.75.75.75h5.672l.37 1.5H3.75v-7.5h9.5zm6.052-.75-1.112-4.5h-3.44v4.5zM3 17.25a.75.75 0 0 0 0 1.5h18a.75.75 0 0 0 0-1.5z"
		clip-rule="evenodd"
	/>
</svg>
