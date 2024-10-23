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
		d="M7.091 6.75a.24.24 0 0 1-.24-.284A5.252 5.252 0 0 1 17.25 7.5a5.25 5.25 0 0 1-8.463 4.152c-.177-.137-.073-.402.151-.402H10.5a2.25 2.25 0 0 0 0-4.5zm.136 9.477A6.75 6.75 0 0 1 18.75 21a.75.75 0 0 1-.75.75H6a.75.75 0 0 1-.75-.75 6.75 6.75 0 0 1 1.977-4.773M5 5.75a.75.75 0 0 1 .75.75v1.75h4.75a.75.75 0 0 1 0 1.5H5A.75.75 0 0 1 4.25 9V6.5A.75.75 0 0 1 5 5.75m14.75.75a.75.75 0 0 0-1.5 0v2a.75.75 0 0 0 1.5 0z"
		clip-rule="evenodd"
	/>
</svg>
