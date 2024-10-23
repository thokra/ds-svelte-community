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
		d="M20 6.5a1.5 1.5 0 0 0-1.45 1.889l-4.16 4.161a1.5 1.5 0 0 0-.777 0l-2.163-2.162A1.503 1.503 0 0 0 10 8.5a1.5 1.5 0 0 0-1.45 1.889L4.39 14.55a1.5 1.5 0 1 0 1.06 1.06l4.162-4.162a1.5 1.5 0 0 0 .777 0l2.163 2.162A1.503 1.503 0 0 0 14 15.5a1.5 1.5 0 0 0 1.45-1.889l4.162-4.162A1.5 1.5 0 0 0 21.5 8 1.5 1.5 0 0 0 20 6.5"
	/>
</svg>
