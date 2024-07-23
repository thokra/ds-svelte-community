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
		d="M4 3.25h2.75a.5.5 0 0 1 .5.5V7c0 .414.336.75.75.75h8a.75.75 0 0 0 .75-.75V3.75a.5.5 0 0 1 .5-.5H18a.75.75 0 0 1 .53.22l2 2c.141.14.22.331.22.53v14a.75.75 0 0 1-.75.75h-1.75a.5.5 0 0 1-.5-.5V11a.75.75 0 0 0-.75-.75H7a.75.75 0 0 0-.75.75v9.25a.5.5 0 0 1-.5.5H4a.75.75 0 0 1-.75-.75V4A.75.75 0 0 1 4 3.25Zm12.25 17a.5.5 0 0 1-.5.5h-7.5a.5.5 0 0 1-.5-.5v-8a.5.5 0 0 1 .5-.5h7.5a.5.5 0 0 1 .5.5v8Zm-7.5-16.5a.5.5 0 0 1 .5-.5h5.5a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-5.5a.5.5 0 0 1-.5-.5v-2ZM9.25 14a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75Zm.75 2.25a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5h-3Z"
		clip-rule="evenodd"
	/>
</svg>
