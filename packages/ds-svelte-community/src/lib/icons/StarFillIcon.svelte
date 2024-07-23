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
		d="M12 2.25a.75.75 0 0 1 .672.418l2.765 5.601 6.181.899a.75.75 0 0 1 .416 1.279l-4.473 4.36 1.056 6.156a.75.75 0 0 1-1.088.791l-5.53-2.907-5.528 2.907a.75.75 0 0 1-1.088-.79l1.056-6.157-4.473-4.36a.75.75 0 0 1 .415-1.28l6.182-.898 2.764-5.6A.75.75 0 0 1 12 2.25Z"
		clip-rule="evenodd"
	/>
</svg>
