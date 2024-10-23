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
		d="M8 20.75h2.25v.75c0 .414.336.75.75.75h8a.75.75 0 0 0 .75-.75v-4.932a8.75 8.75 0 1 0-15.5-5.68l-1.468 4.897a.75.75 0 0 0 .718.965h1.75V18A2.75 2.75 0 0 0 8 20.75M9.72 7.717A2.52 2.52 0 0 1 13 7.475a2.518 2.518 0 0 1 3.28 3.803l-2.75 2.75a.75.75 0 0 1-1.06 0l-2.75-2.75a2.52 2.52 0 0 1 0-3.56"
		clip-rule="evenodd"
	/>
</svg>
