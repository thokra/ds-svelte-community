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
		d="M8.25 4A.75.75 0 0 1 9 3.25h6a.75.75 0 0 1 .75.75v2.25H16c.966 0 1.75.784 1.75 1.75v10A1.75 1.75 0 0 1 16 19.75h-.25V20a.75.75 0 0 1-1.5 0v-.25h-4.5V20a.75.75 0 0 1-1.5 0v-.25H8A1.75 1.75 0 0 1 6.25 18V8c0-.966.784-1.75 1.75-1.75h.25V4Zm1.5 2.25h4.5v-1.5h-4.5v1.5ZM9.25 11a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75Z"
		clip-rule="evenodd"
	/>
</svg>
