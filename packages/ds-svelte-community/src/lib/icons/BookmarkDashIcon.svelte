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
		d="M8 4.75a.25.25 0 0 0-.25.25v1.875a.75.75 0 0 1-1.5 0V5c0-.966.784-1.75 1.75-1.75h2a.75.75 0 0 1 0 1.5H8ZM13.25 4a.75.75 0 0 1 .75-.75h2c.966 0 1.75.784 1.75 1.75v1.875a.75.75 0 0 1-1.5 0V5a.25.25 0 0 0-.25-.25h-2a.75.75 0 0 1-.75-.75ZM7 9.875a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0v-3.75a.75.75 0 0 1 .75-.75Zm10 0a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0v-3.75a.75.75 0 0 1 .75-.75Zm-5.53 4.595a.75.75 0 0 1 1.06 0l1.25 1.25a.75.75 0 1 1-1.06 1.06l-.72-.72-.72.72a.75.75 0 1 1-1.06-1.06l1.25-1.25ZM7 17.375a.75.75 0 0 1 .75.75v.066a.75.75 0 0 1 1.03 1.09l-1.25 1.25A.75.75 0 0 1 6.25 20v-1.875a.75.75 0 0 1 .75-.75Zm10 0a.75.75 0 0 1 .75.75V20a.75.75 0 0 1-1.28.53l-1.25-1.25a.75.75 0 0 1 1.03-1.089v-.066a.75.75 0 0 1 .75-.75Z"
		clip-rule="evenodd"
	/>
</svg>
