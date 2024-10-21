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
		d="M19.03 6.03a.75.75 0 0 0-1.06-1.06l-1.5 1.5a.75.75 0 0 0 1.06 1.06l1.5-1.5ZM19 11.25a.75.75 0 0 0 0 1.5h2a.75.75 0 0 0 0-1.5h-2Zm-2.53 5.22a.75.75 0 0 1 1.06 0l1.5 1.5a.75.75 0 1 1-1.06 1.06l-1.5-1.5a.75.75 0 0 1 0-1.06ZM14.287 5.307A.75.75 0 0 1 14.75 6v12a.75.75 0 0 1-1.28.53l-.615-.614a7.25 7.25 0 0 0-4.1-2.05l-.005-.001V19a.75.75 0 0 1-.75.75H6a.75.75 0 0 1-.75-.75v-3.325A3.751 3.751 0 0 1 6 8.25h1.567c.253 0 .505-.018.755-.054l.432-.061a7.25 7.25 0 0 0 4.101-2.051l.615-.614a.75.75 0 0 1 .817-.163Zm-5.32 9.073-.217-.03v-4.7l.216-.03a8.75 8.75 0 0 0 4.284-1.874v8.508a8.75 8.75 0 0 0-4.284-1.874ZM6 9.75a2.25 2.25 0 0 0 0 4.5h1.25v-4.5H6Zm1.25 6h-.5v2.5h.5v-2.5Z"
		clip-rule="evenodd"
	/>
</svg>
