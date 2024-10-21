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
		d="M4 3.25a.75.75 0 0 0-.75.75v6c0 .414.336.75.75.75h6a.75.75 0 0 0 .75-.75V4a.75.75 0 0 0-.75-.75H4Zm.75 6v-4.5h4.5v4.5h-4.5Zm9.25-6a.75.75 0 0 0-.75.75v6c0 .414.336.75.75.75h6a.75.75 0 0 0 .75-.75V4a.75.75 0 0 0-.75-.75h-6Zm.75 6v-4.5h4.5v4.5h-4.5ZM3.25 14a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-.75.75H4a.75.75 0 0 1-.75-.75v-6Zm1.5.75v4.5h4.5v-4.5h-4.5Zm9.25-1.5a.75.75 0 0 0-.75.75v2c0 .414.336.75.75.75h2a.75.75 0 0 0 .75-.75v-2a.75.75 0 0 0-.75-.75h-2Zm3.25.75a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-.75.75h-2a.75.75 0 0 1-.75-.75v-2ZM14 17.25a.75.75 0 0 0-.75.75v2c0 .414.336.75.75.75h2a.75.75 0 0 0 .75-.75v-2a.75.75 0 0 0-.75-.75h-2Z"
		clip-rule="evenodd"
	/>
</svg>
