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
		d="M4.25 4A.75.75 0 0 1 5 3.25h14a.75.75 0 0 1 .75.75v8.25H20a.75.75 0 0 1 .721.956l-2 7a.75.75 0 0 1-.721.544H6a.75.75 0 0 1-.721-.544l-2-7A.75.75 0 0 1 4 12.25h.25V4Zm14 3.75v4.5h-.511A2.75 2.75 0 0 0 13.5 9.695 2.74 2.74 0 0 0 12 9.25c-.553 0-1.069.163-1.5.445a2.75 2.75 0 0 0-4.24 2.555h-.51v-4.5h12.5Zm-10.475 4.5H9.26a2.78 2.78 0 0 1 .239-1.396 1.25 1.25 0 0 0-1.725 1.396Zm4.486 0h-1.486a1.25 1.25 0 0 1 1.725-1.396 2.74 2.74 0 0 0-.239 1.396Zm3.964 0a1.25 1.25 0 1 0-2.45 0h2.45Zm-6.225 3a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5h-4Z"
		clip-rule="evenodd"
	/>
</svg>
