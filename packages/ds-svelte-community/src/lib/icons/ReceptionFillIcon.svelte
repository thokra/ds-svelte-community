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
		d="M13.75 7a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0m-7.5 1a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0M9 11.25a3 3 0 0 0-2.478 1.241c-.53.716-.772 1.632-.772 2.509v4c0 .414.336.75.75.75h5a.75.75 0 0 0 .75-.75v-4c0-.877-.242-1.793-.772-2.509A3 3 0 0 0 9 11.25m7.5-1a3 3 0 0 0-2.478 1.241c-.53.716-.772 1.632-.772 2.509 0 .138.112.25.25.25h6a.25.25 0 0 0 .25-.25c0-.877-.242-1.793-.772-2.509A3 3 0 0 0 16.5 10.25m-12 5a.25.25 0 0 1 .25.25v4a.25.25 0 0 1-.25.25H3a.75.75 0 0 1-.75-.75v-3a.75.75 0 0 1 .75-.75zm9 4.5a.25.25 0 0 1-.25-.25v-4a.25.25 0 0 1 .25-.25H21a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-.75.75z"
		clip-rule="evenodd"
	/>
</svg>
