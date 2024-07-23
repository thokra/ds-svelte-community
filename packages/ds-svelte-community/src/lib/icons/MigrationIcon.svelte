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
		d="M15.97 3.47a.75.75 0 0 1 1.06 0l3.5 3.5a.75.75 0 0 1 0 1.06l-3.5 3.5a.75.75 0 1 1-1.06-1.06l2.22-2.22h-7.568a2.251 2.251 0 1 1 0-1.5h7.567l-2.22-2.22a.75.75 0 0 1 0-1.06ZM7.75 7.5a.75.75 0 1 1 1.5 0 .75.75 0 0 1-1.5 0Zm.28 4.97a.75.75 0 0 1 0 1.06l-2.22 2.22h7.568a2.251 2.251 0 1 1 0 1.5H5.811l2.22 2.22a.75.75 0 1 1-1.061 1.06l-3.5-3.5a.75.75 0 0 1 0-1.06l3.5-3.5a.75.75 0 0 1 1.06 0Zm6.72 4.03a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Z"
		clip-rule="evenodd"
	/>
</svg>
