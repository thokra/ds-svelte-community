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
		d="M3.25 10.5a7.25 7.25 0 1 1 12.88 4.568l5.412 5.412a.75.75 0 0 1-1.061 1.06l-5.412-5.41A7.25 7.25 0 0 1 3.25 10.5Zm8-3.5a.75.75 0 0 0-1.5 0v2.75H7a.75.75 0 0 0 0 1.5h2.75V14a.75.75 0 0 0 1.5 0v-2.75H14a.75.75 0 0 0 0-1.5h-2.75V7Z"
		clip-rule="evenodd"
	/>
</svg>
