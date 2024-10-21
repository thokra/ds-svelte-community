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
		d="M4 3.25a.75.75 0 0 0-.75.75v16c0 .414.336.75.75.75h16a.75.75 0 0 0 .75-.75V4a.75.75 0 0 0-.75-.75H4Zm3.333 12.644a2.75 2.75 0 0 0-2.083 2.668v.688h-.5V4.75h9.253l-1.333 2.4a1.75 1.75 0 0 0 1.53 2.6h1.05V14A2.75 2.75 0 0 0 18 16.75h1.25v2.5h-5.5V12.5a2.25 2.25 0 0 0-4.5 0v2.914l-1.917.48Zm.364 1.455a1.25 1.25 0 0 0-.947 1.213v.688h5.5V12.5a.75.75 0 0 0-1.5 0V16a.75.75 0 0 1-.568.728l-2.485.62ZM18.75 12a.75.75 0 0 1-.75.75h-1.25V14c0 .69.56 1.25 1.25 1.25h1.25V4.75h-3.543a.754.754 0 0 1-.051.114L13.98 7.88a.25.25 0 0 0 .219.371H16a.75.75 0 0 1 .75.75v2.25H18a.75.75 0 0 1 .75.75Z"
		clip-rule="evenodd"
	/>
</svg>
