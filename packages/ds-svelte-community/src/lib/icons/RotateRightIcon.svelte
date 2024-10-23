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
		d="M8.97 2.97a.75.75 0 0 1 1.06 0l2.5 2.5a.75.75 0 0 1 .22.523v.014a.75.75 0 0 1-.22.523l-2.5 2.5a.75.75 0 1 1-1.06-1.06l1.22-1.22H7A2.25 2.25 0 0 0 4.75 9v4.5a.75.75 0 0 1-1.5 0V9A3.75 3.75 0 0 1 7 5.25h3.19L8.97 4.03a.75.75 0 0 1 0-1.06M13 11.25A1.75 1.75 0 0 0 11.25 13v6c0 .966.784 1.75 1.75 1.75h6A1.75 1.75 0 0 0 20.75 19v-6A1.75 1.75 0 0 0 19 11.25zM12.75 13a.25.25 0 0 1 .25-.25h6a.25.25 0 0 1 .25.25v6a.25.25 0 0 1-.25.25h-6a.25.25 0 0 1-.25-.25z"
		clip-rule="evenodd"
	/>
</svg>
