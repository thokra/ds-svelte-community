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
		d="M19.638 4.417a3.252 3.252 0 0 0-4.608-.008.328.328 0 0 0 .003.467l.298.292 3.841 3.84a.324.324 0 0 0 .458 0 3.252 3.252 0 0 0 .008-4.59Zm-1.651 6.235a.5.5 0 0 0 0-.707l-3.714-3.713-.184-.181a.5.5 0 0 0-.704.003l-7.733 7.734a.75.75 0 0 0-.19.324l-1.415 4.95a.75.75 0 0 0 .925.927l4.94-1.398a.751.751 0 0 0 .327-.191l7.748-7.748Z"
		clip-rule="evenodd"
	/>
</svg>
