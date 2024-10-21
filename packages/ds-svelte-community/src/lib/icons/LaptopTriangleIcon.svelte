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
		d="M16 1.25a.75.75 0 0 1 .656.386l5 9A.75.75 0 0 1 21 11.75H11a.75.75 0 0 1-.656-1.114l5-9A.75.75 0 0 1 16 1.25Zm3.725 9L16 3.544l-3.725 6.706h7.45ZM2.25 19a.75.75 0 0 1 .75-.75h18a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75Zm3-13a.25.25 0 0 1 .25-.25h4.625a.75.75 0 0 0 0-1.5H5.5A1.75 1.75 0 0 0 3.75 6v9c0 .966.784 1.75 1.75 1.75h13A1.75 1.75 0 0 0 20.25 15v-.375a.75.75 0 0 0-1.5 0V15a.25.25 0 0 1-.25.25h-13a.25.25 0 0 1-.25-.25V6Z"
		clip-rule="evenodd"
	/>
</svg>
