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
		d="M13 3.25a.25.25 0 0 1 .25.25v4c0 .69.56 1.25 1.25 1.25h4a.25.25 0 0 1 .25.25v10.5c0 .69-.56 1.25-1.25 1.25h-11c-.69 0-1.25-.56-1.25-1.25v-15c0-.69.56-1.25 1.25-1.25H13Zm2.177.866a.25.25 0 0 0-.427.177V7c0 .138.112.25.25.25h2.707a.25.25 0 0 0 .177-.427l-2.707-2.707ZM10 9.75a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm-2.25.75a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0Zm5.88 3.084a.75.75 0 0 0-1.248 0l-3.006 4.51a.75.75 0 1 0 1.248.831l2.174-3.26a.25.25 0 0 1 .416 0l2.174 3.26a.75.75 0 0 0 1.249-.832l-3.007-4.509Z"
		clip-rule="evenodd"
	/>
</svg>
