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
		d="M12 5.5a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm-2.75 4a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 .75.75v7.25H14a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1 0-1.5h1.25v-6.5H10a.75.75 0 0 1-.75-.75Z"
		clip-rule="evenodd"
	/>
</svg>
