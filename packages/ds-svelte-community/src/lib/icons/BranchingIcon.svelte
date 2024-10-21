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
		d="M12.25 5.5a2.25 2.25 0 0 1-1.5 2.122v4.628H12A4.25 4.25 0 0 0 16.25 8v-.378a2.25 2.25 0 1 1 1.5 0V8A5.75 5.75 0 0 1 12 13.75h-1.25v2.628a2.251 2.251 0 1 1-1.5 0V7.622a2.25 2.25 0 1 1 3-2.122ZM10 4.75a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm7 1.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM9.25 18.5a.75.75 0 1 1 1.5 0 .75.75 0 0 1-1.5 0Z"
		clip-rule="evenodd"
	/>
</svg>
