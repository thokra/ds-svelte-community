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
		d="M12 3.25c-.97 0-1.605.7-1.985 1.428-.387.741-.626 1.71-.757 2.712-.134.814-.15 1.841.204 2.707.183.447.474.871.916 1.181.258.181.55.31.872.388V20a.75.75 0 0 0 1.5 0v-8.334a2.53 2.53 0 0 0 .872-.388c.442-.31.733-.734.916-1.181.354-.865.338-1.891.204-2.705-.13-1.035-.369-2.006-.759-2.743C13.596 3.917 12.957 3.25 12 3.25Z"
	/>
</svg>
