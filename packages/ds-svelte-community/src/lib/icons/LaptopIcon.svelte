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
		d="M5.5 4.25A1.75 1.75 0 0 0 3.75 6v9c0 .966.784 1.75 1.75 1.75h13A1.75 1.75 0 0 0 20.25 15V6a1.75 1.75 0 0 0-1.75-1.75h-13ZM5.25 6a.25.25 0 0 1 .25-.25h13a.25.25 0 0 1 .25.25v9a.25.25 0 0 1-.25.25h-13a.25.25 0 0 1-.25-.25V6ZM3 18.25a.75.75 0 0 0 0 1.5h18a.75.75 0 0 0 0-1.5H3Z"
		clip-rule="evenodd"
	/>
</svg>
