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
		d="M9.25 5a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 .75.75v1.25H21a.75.75 0 0 1 .75.75v12a.75.75 0 0 1-.75.75H3a.75.75 0 0 1-.75-.75V7A.75.75 0 0 1 3 6.25h6.25zm4 .75v.5h-2.5v-.5zm-9.5 12.5V7.75h16.5v10.5zM5.25 10A.75.75 0 0 1 6 9.25h3a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-.75.75H6a.75.75 0 0 1-.75-.75zm1.5.75v4.5h1.5v-4.5zm4.5-.75a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5h-6a.75.75 0 0 1-.75-.75m.75 2.25a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5zM11.25 16a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5h-6a.75.75 0 0 1-.75-.75"
		clip-rule="evenodd"
	/>
</svg>
