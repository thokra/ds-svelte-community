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
		d="M9.25 5.521c-2.32.74-4 2.914-4 5.479v1.25H5A2.75 2.75 0 0 0 2.25 15v3c0 .966.784 1.75 1.75 1.75h1.25V20c0 .966.784 1.75 1.75 1.75h10A1.75 1.75 0 0 0 18.75 20v-.25H20A1.75 1.75 0 0 0 21.75 18v-3A2.75 2.75 0 0 0 19 12.25h-.25V11a5.753 5.753 0 0 0-4-5.479V4.5A1.75 1.75 0 0 0 13 2.75h-2A1.75 1.75 0 0 0 9.25 4.5v1.021ZM11 4.25a.25.25 0 0 0-.25.25v.755c.083-.003.166-.005.25-.005h2c.084 0 .167.002.25.005V4.5a.25.25 0 0 0-.25-.25h-2ZM6.75 11A4.25 4.25 0 0 1 11 6.75h2A4.25 4.25 0 0 1 17.25 11v9a.25.25 0 0 1-.25.25H7a.25.25 0 0 1-.25-.25v-9ZM4 18.25a.25.25 0 0 1-.25-.25v-3c0-.69.56-1.25 1.25-1.25h.25v4.5H4Zm15-4.5c.69 0 1.25.56 1.25 1.25v3a.25.25 0 0 1-.25.25h-1.25v-4.5H19ZM9.25 10a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75Zm-1 5c0-.966.784-1.75 1.75-1.75h4c.966 0 1.75.784 1.75 1.75v2A1.75 1.75 0 0 1 14 18.75h-4A1.75 1.75 0 0 1 8.25 17v-2Zm1.75-.25a.25.25 0 0 0-.25.25v2c0 .138.112.25.25.25h4a.25.25 0 0 0 .25-.25v-2a.25.25 0 0 0-.25-.25h-4Z"
		clip-rule="evenodd"
	/>
</svg>
