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
		d="M10.95 7.4a.75.75 0 0 1 .15 1.05L8.438 12l2.662 3.55a.75.75 0 1 1-1.2.9l-2.65-3.533V16a.75.75 0 0 1-1.5 0V8a.75.75 0 0 1 1.5 0v3.083L9.9 7.55a.75.75 0 0 1 1.05-.15m1.8.6a.75.75 0 0 1 .75-.75H16a2.75 2.75 0 0 1 1.1 5.272l1.57 3.143a.75.75 0 1 1-1.34.67l-1.793-3.585H14.25V16a.75.75 0 0 1-1.5 0zm4.5 2a1.25 1.25 0 0 1-1.266 1.25H14.25v-2.5H16c.69 0 1.25.56 1.25 1.25"
		clip-rule="evenodd"
	/>
</svg>
