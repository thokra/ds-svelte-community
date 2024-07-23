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
		d="M13.216 11.287a.25.25 0 0 1 .033-.11l2.764-4.818a.25.25 0 0 1 .342-.092l2.788 1.62a.25.25 0 0 1 .091.34L16.47 13.05a.25.25 0 0 1-.078.083l-3.003 1.995a.25.25 0 0 1-.387-.223l.215-3.617ZM17.05 5.05a.25.25 0 0 1-.091-.34l.444-.774a1.852 1.852 0 0 1 2.54-.685 1.878 1.878 0 0 1 .68 2.556l-.443.772a.25.25 0 0 1-.342.091L17.05 5.05Zm-5.294 6.354a1.52 1.52 0 0 1 .197-.66l1.216-2.12a.25.25 0 0 0-.217-.374H9.5a.25.25 0 0 0-.25.25v12c0 .138.112.25.25.25H18A2.75 2.75 0 0 0 20.75 18v-7c0-.463-.114-.899-.316-1.281-.085-.16-.306-.15-.397.007l-2.459 4.287a1.495 1.495 0 0 1-.47.502l-3.265 2.17a1.49 1.49 0 0 1-1.574.046 1.51 1.51 0 0 1-.747-1.395l.234-3.932ZM7.5 8.25a.25.25 0 0 1 .25.25v5a.25.25 0 0 1-.25.25h-4a.25.25 0 0 1-.25-.25V11A2.75 2.75 0 0 1 6 8.25h1.5ZM3.25 15.5V18A2.75 2.75 0 0 0 6 20.75h1.5a.25.25 0 0 0 .25-.25v-5a.25.25 0 0 0-.25-.25h-4a.25.25 0 0 0-.25.25Z"
		clip-rule="evenodd"
	/>
</svg>
