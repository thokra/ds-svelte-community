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
		d="M4 5.25A1.75 1.75 0 0 0 2.25 7v10c0 .966.784 1.75 1.75 1.75h16A1.75 1.75 0 0 0 21.75 17V7A1.75 1.75 0 0 0 20 5.25H4Zm6.364 3.594A.75.75 0 0 0 9.25 9.5v5a.75.75 0 0 0 1.114.656l4.5-2.5a.75.75 0 0 0 0-1.312l-4.5-2.5ZM12.956 12l-2.206 1.225v-2.45L12.956 12Z"
		clip-rule="evenodd"
	/>
</svg>
