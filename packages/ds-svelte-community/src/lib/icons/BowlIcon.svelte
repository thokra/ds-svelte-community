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
		d="M4 7.25a.75.75 0 0 0-.75.75v3a6.753 6.753 0 0 0 4.5 6.366V18c0 .414.336.75.75.75h7a.75.75 0 0 0 .75-.75v-.634A6.753 6.753 0 0 0 20.75 11V8a.75.75 0 0 0-.75-.75H4Zm6 9A5.25 5.25 0 0 1 4.75 11V8.75h14.5V11c0 2.9-2.35 5.25-5.25 5.25h-4Z"
		clip-rule="evenodd"
	/>
</svg>
