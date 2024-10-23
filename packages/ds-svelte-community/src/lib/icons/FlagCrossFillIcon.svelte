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
		d="M11 4.25a.25.25 0 0 1 .25.25V10c0 .414.336.75.75.75h9.5a.25.25 0 0 1 .25.25v2a.25.25 0 0 1-.25.25H12a.75.75 0 0 0-.75.75v5.5a.25.25 0 0 1-.25.25H9a.25.25 0 0 1-.25-.25V14a.75.75 0 0 0-.75-.75H2.5a.25.25 0 0 1-.25-.25v-2a.25.25 0 0 1 .25-.25H8a.75.75 0 0 0 .75-.75V4.5A.25.25 0 0 1 9 4.25zm-8.5 10.5a.25.25 0 0 0-.25.25v4c0 .414.336.75.75.75h4a.25.25 0 0 0 .25-.25V15a.25.25 0 0 0-.25-.25zm10.25.25a.25.25 0 0 1 .25-.25h8.5a.25.25 0 0 1 .25.25v4a.75.75 0 0 1-.75.75h-8a.25.25 0 0 1-.25-.25zM13 4.25a.25.25 0 0 0-.25.25V9c0 .138.112.25.25.25h8.5a.25.25 0 0 0 .25-.25V5a.75.75 0 0 0-.75-.75zm-6 5A.25.25 0 0 0 7.25 9V4.5A.25.25 0 0 0 7 4.25H3a.75.75 0 0 0-.75.75v4c0 .138.112.25.25.25z"
		clip-rule="evenodd"
	/>
</svg>
