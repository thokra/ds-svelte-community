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
		d="M4.25 4A.75.75 0 0 1 5 3.25a15.7 15.7 0 0 1 10.113 3.675.75.75 0 0 1-.964 1.15A14.2 14.2 0 0 0 5 4.75.75.75 0 0 1 4.25 4M5 8.25a.75.75 0 0 0 0 1.5 9.2 9.2 0 0 1 3.977.896.75.75 0 0 0 .646-1.354A10.7 10.7 0 0 0 5 8.25M4.25 14a.75.75 0 0 1 .75-.75c1.046 0 2.029.28 2.876.77a.75.75 0 0 1-.752 1.298A4.2 4.2 0 0 0 5 14.75a.75.75 0 0 1-.75-.75m-.75 5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0M15 9.25a5.75 5.75 0 1 0 0 11.5 5.75 5.75 0 0 0 0-11.5m-2.5 5a.75.75 0 0 0 0 1.5h5a.75.75 0 0 0 0-1.5z"
		clip-rule="evenodd"
	/>
</svg>
