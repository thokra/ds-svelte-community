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
		d="M12 6.25A9.75 9.75 0 0 0 2.25 16c0 .414.336.75.75.75h18a.75.75 0 0 0 .75-.75A9.75 9.75 0 0 0 12 6.25ZM7.41 15a.25.25 0 0 1-.25.25h-1a.25.25 0 0 1-.25-.25v-1a.75.75 0 0 1 1.5 0v1Zm7.12 0a.25.25 0 0 1-.25.25h-1a.25.25 0 0 1-.25-.25v-1a.75.75 0 0 1 1.5 0v1Zm3.56 0a.25.25 0 0 1-.25.25h-1a.25.25 0 0 1-.25-.25v-1a.75.75 0 0 1 1.5 0v1Zm-8.37.25a.25.25 0 0 1-.25-.25v-1a.75.75 0 1 1 1.5 0v1a.25.25 0 0 1-.25.25h-1Z"
		clip-rule="evenodd"
	/>
</svg>
