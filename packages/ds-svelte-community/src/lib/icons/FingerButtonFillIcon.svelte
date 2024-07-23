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
		d="M4.25 5A2.75 2.75 0 0 1 7 2.25h10A2.75 2.75 0 0 1 19.75 5v3A2.75 2.75 0 0 1 17 10.75h-.005l-1.394-.008-1.136-.163a.25.25 0 0 1-.215-.247V8.5a3.75 3.75 0 1 0-7.5 0v1.937a.25.25 0 0 1-.252.25h-.003a.749.749 0 0 1-.182-.024A2.75 2.75 0 0 1 4.25 8V5Zm6.25 1.25A2.25 2.25 0 0 0 8.25 8.5v5.399l-.683-.57a2.299 2.299 0 0 0-3.238 3.238l4.095 4.913a.75.75 0 0 0 .576.27h8a.75.75 0 0 0 .725-.557l1.129-4.235a3.75 3.75 0 0 0-3.093-4.678l-3.011-.43V8.5a2.25 2.25 0 0 0-2.25-2.25Z"
		clip-rule="evenodd"
	/>
</svg>
