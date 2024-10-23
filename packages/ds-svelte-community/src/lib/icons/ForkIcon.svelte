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
		d="M10 3.25a.75.75 0 0 1 .75.75v5a1.25 1.25 0 1 0 2.5 0V4a.75.75 0 0 1 1.5 0v5a2.75 2.75 0 0 1-2 2.646V20a.75.75 0 0 1-1.5 0v-8.353A2.75 2.75 0 0 1 9.25 9V4a.75.75 0 0 1 .75-.75m2.75.75a.75.75 0 0 0-1.5 0v3.5a.75.75 0 0 0 1.5 0z"
		clip-rule="evenodd"
	/>
</svg>
