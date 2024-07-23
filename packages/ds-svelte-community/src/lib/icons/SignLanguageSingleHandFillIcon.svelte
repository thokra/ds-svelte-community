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
		d="M14.417 20h-2.194a.944.944 0 0 1-.422-.1L8 18H6.75V8.156l2.588-2.91a1.329 1.329 0 1 1 1.986 1.765l2.068-2.327a1.389 1.389 0 1 1 2.02 1.905L14 8l3.622-2.173a1.369 1.369 0 0 1 1.489 2.295L15 11l2.049.256a2.678 2.678 0 0 1 2.303 2.179l.377 2.075a1.492 1.492 0 1 1-2.945.478l-.24-1.682a.394.394 0 0 0-.351-.337l-3.594-.359a1 1 0 0 0-1.099.995v.99c0 .515.388.948.9 1.005l2.192.244A1.583 1.583 0 0 1 14.417 20ZM5.25 9H3.5a.5.5 0 0 0-.5.5v8a.5.5 0 0 0 .5.5h1.75V9Z"
		clip-rule="evenodd"
	/>
</svg>
