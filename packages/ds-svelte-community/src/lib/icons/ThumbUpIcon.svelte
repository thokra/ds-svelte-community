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
		d="M9.876 2.584a.75.75 0 0 1 .624-.334h1.225a2.75 2.75 0 0 1 2.609 3.62l-.793 2.38h5.34a2.75 2.75 0 0 1 2.654 3.474l-1.91 7a2.75 2.75 0 0 1-2.653 2.026H11.5a.749.749 0 0 1-.147-.015l-4.927-.985H3a.75.75 0 0 1-.75-.75V9A.75.75 0 0 1 3 8.25h3.099l3.777-5.666Zm1.025 1.166L7.124 9.416a.75.75 0 0 1-.624.334H3.75v8.5H6.5c.05 0 .099.005.147.015l4.927.985h5.398a1.25 1.25 0 0 0 1.206-.921l1.91-7A1.25 1.25 0 0 0 18.88 9.75H12.5a.75.75 0 0 1-.711-.987l1.122-3.368a1.25 1.25 0 0 0-1.186-1.645h-.824Z"
		clip-rule="evenodd"
	/>
</svg>
