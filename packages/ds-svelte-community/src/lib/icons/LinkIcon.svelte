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
		d="M14.909 5.152a2.25 2.25 0 0 1 3.182 0l.757.757a2.25 2.25 0 0 1 0 3.182l-4.964 4.965a1.25 1.25 0 0 1-1.768 0L11.03 12.97a.75.75 0 1 0-1.06 1.06l1.085 1.086a2.75 2.75 0 0 0 3.89 0l4.964-4.964a3.75 3.75 0 0 0 0-5.304l-.757-.757-.53.53.53-.53a3.75 3.75 0 0 0-5.304 0l-.878.879a.75.75 0 0 0 1.06 1.06l.879-.878Zm-1.964 3.732a2.75 2.75 0 0 0-3.89 0l-4.964 4.964a3.75 3.75 0 0 0 0 5.304l.513-.514-.513.514.757.757a3.75 3.75 0 0 0 5.304 0l.878-.879a.75.75 0 0 0-1.06-1.06l-.879.878a2.25 2.25 0 0 1-3.182 0l-.757-.757a2.25 2.25 0 0 1 0-3.182l4.964-4.965a1.25 1.25 0 0 1 1.768 0l1.086 1.086a.75.75 0 0 0 1.06-1.06l-1.085-1.086Z"
		clip-rule="evenodd"
	/>
</svg>
