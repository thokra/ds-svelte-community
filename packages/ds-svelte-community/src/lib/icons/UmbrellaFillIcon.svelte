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
		d="m14.536 10.594.048.03h.832l.008-.005.04-.025a6.883 6.883 0 0 1 .779-.408c.52-.232 1.158-.436 1.757-.436.916 0 1.894.473 2.368.744a.75.75 0 0 0 1.1-.83C20.421 5.406 16.58 2.25 12 2.25S3.58 5.407 2.532 9.663a.75.75 0 0 0 1.1.83c.474-.27 1.452-.743 2.368-.743.599 0 1.237.204 1.758.435a6.877 6.877 0 0 1 .818.434l.008.005a.75.75 0 0 0 .832 0l.008-.005.04-.025a6.877 6.877 0 0 1 .779-.408c.52-.232 1.158-.436 1.757-.436s1.237.204 1.758.435a6.883 6.883 0 0 1 .778.409ZM12.75 12a.75.75 0 0 0-1.5 0v7.047l.006.092a3.206 3.206 0 0 0 .323 1.196c.17.34.436.701.849.976.417.279.94.439 1.572.439.631 0 1.155-.16 1.572-.439a2.5 2.5 0 0 0 .849-.976 3.206 3.206 0 0 0 .328-1.288v-.03l.001-.517a.75.75 0 0 0-1.5 0v.499l-.002.034a1.71 1.71 0 0 1-.169.632c-.08.16-.19.299-.339.399-.145.096-.371.186-.74.186s-.595-.09-.74-.186c-.15-.1-.259-.238-.34-.4a1.71 1.71 0 0 1-.17-.667V12Z"
		clip-rule="evenodd"
	/>
</svg>
