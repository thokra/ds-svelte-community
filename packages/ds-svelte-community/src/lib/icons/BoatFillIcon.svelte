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
		d="M5.25 3A.75.75 0 0 1 6 2.25h12a.75.75 0 0 1 .75.75v6.653a.25.25 0 0 1-.324.239l-5.758-1.79a2.25 2.25 0 0 0-1.336 0l-5.758 1.79a.25.25 0 0 1-.324-.24V3Zm8.25 2.75a.75.75 0 0 0 0 1.5H15a.75.75 0 0 0 0-1.5h-1.5Zm-5.25.75A.75.75 0 0 1 9 5.75h1.5a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75Zm3.973 3.034a.75.75 0 0 0-.446 0l-7.326 2.278a.75.75 0 0 0-.476.99l3.327 8.472A.75.75 0 0 0 8 21.75h8a.75.75 0 0 0 .698-.476l3.327-8.472a.75.75 0 0 0-.476-.99l-7.326-2.278Z"
		clip-rule="evenodd"
	/>
</svg>
