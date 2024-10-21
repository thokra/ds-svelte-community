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
		d="M4.75 4a.75.75 0 0 0-1.5 0v16a.75.75 0 0 0 1.5 0v-7.25h14.5V20a.75.75 0 0 0 1.5 0V4a.75.75 0 0 0-1.5 0v1.25H4.75V4Zm2.884 2.75c.2 0 .319.223.208.389l-2.673 4.01a.229.229 0 0 1-.419-.128v-.972a.25.25 0 0 1 .042-.138l2.033-3.05a.25.25 0 0 1 .208-.111h.6Zm1.333 4.5a.25.25 0 0 0 .208-.111l2.667-4a.25.25 0 0 0-.208-.389h-.601a.25.25 0 0 0-.208.111l-2.667 4a.25.25 0 0 0 .208.389h.601Zm4 0a.25.25 0 0 0 .208-.111l2.667-4a.25.25 0 0 0-.208-.389h-.601a.25.25 0 0 0-.208.111l-2.667 4a.25.25 0 0 0 .208.389h.601Zm4 0a.25.25 0 0 0 .208-.111l2.033-3.05a.25.25 0 0 0 .042-.138v-.972a.229.229 0 0 0-.419-.127l-2.673 4.01a.25.25 0 0 0 .208.388h.601Z"
		clip-rule="evenodd"
	/>
</svg>
