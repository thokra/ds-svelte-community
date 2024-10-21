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
		d="M12 2.25a6.25 6.25 0 1 0 0 12.5 6.25 6.25 0 0 0 0-12.5Zm-1.5 5.5a.75.75 0 0 0 0 1.5h.01a.75.75 0 0 0 0-1.5h-.01Zm2.25.75a.75.75 0 0 1 .75-.75h.01a.75.75 0 0 1 0 1.5h-.01a.75.75 0 0 1-.75-.75ZM12 15.75A5.25 5.25 0 0 0 6.75 21a.75.75 0 0 0 .75.75h9a.75.75 0 0 0 .75-.75A5.25 5.25 0 0 0 12 15.75Z"
		clip-rule="evenodd"
	/>
</svg>
