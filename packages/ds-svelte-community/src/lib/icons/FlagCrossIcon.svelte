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
		d="M2.25 5A.75.75 0 0 1 3 4.25h18a.75.75 0 0 1 .75.75v14a.75.75 0 0 1-.75.75H3a.75.75 0 0 1-.75-.75V5Zm6.5 9a.75.75 0 0 0-.75-.75H3.75v-2.5H8a.75.75 0 0 0 .75-.75V5.75h2.5V10c0 .414.336.75.75.75h8.25v2.5H12a.75.75 0 0 0-.75.75v4.25h-2.5V14Zm-5-8.25v3.5h3.5v-3.5h-3.5Zm0 9v3.5h3.5v-3.5h-3.5Zm9 0h7.5v3.5h-7.5v-3.5Zm7.5-5.5v-3.5h-7.5v3.5h7.5Z"
		clip-rule="evenodd"
	/>
</svg>
