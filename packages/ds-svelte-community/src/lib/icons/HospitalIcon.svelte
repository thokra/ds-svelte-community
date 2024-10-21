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
		d="M4.25 3A.75.75 0 0 1 5 2.25h14a.75.75 0 0 1 .75.75v18a.75.75 0 0 1-.75.75H5a.75.75 0 0 1-.75-.75V3Zm12 14a.75.75 0 0 0-.75-.75H12a.75.75 0 0 0-.75.75v3.25h-5.5V3.75h12.5v16.5h-2V17Zm-3.5.75v2.5h2v-2.5h-2Zm0-11.75a.75.75 0 0 0-1.5 0v1.25H10a.75.75 0 0 0 0 1.5h1.25V10a.75.75 0 0 0 1.5 0V8.75H14a.75.75 0 0 0 0-1.5h-1.25V6Zm-3.5 7a.75.75 0 0 0-1.5 0v1a.75.75 0 0 0 1.5 0v-1Zm0 4a.75.75 0 0 0-1.5 0v1a.75.75 0 0 0 1.5 0v-1ZM12 12.25a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0v-1a.75.75 0 0 1 .75-.75Zm4.25.75a.75.75 0 0 0-1.5 0v1a.75.75 0 0 0 1.5 0v-1Z"
		clip-rule="evenodd"
	/>
</svg>
