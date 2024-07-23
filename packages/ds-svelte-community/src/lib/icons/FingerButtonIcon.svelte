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
		d="M7 2.25A2.75 2.75 0 0 0 4.25 5v3a2.75 2.75 0 0 0 2.063 2.663.75.75 0 1 0 .374-1.452A1.25 1.25 0 0 1 5.75 8V5c0-.69.56-1.25 1.25-1.25h10c.69 0 1.25.56 1.25 1.25v3c0 .69-.56 1.25-1.25 1.25h-2.5a.75.75 0 0 0 0 1.5H17A2.75 2.75 0 0 0 19.75 8V5A2.75 2.75 0 0 0 17 2.25H7ZM9.75 8.5a.75.75 0 0 1 1.5 0v4c0 .373.274.69.644.742l3.655.523a2.25 2.25 0 0 1 1.856 2.807l-.981 3.678H9.35l-3.87-4.644a.799.799 0 0 1 1.125-1.124l1.914 1.594a.75.75 0 0 0 1.23-.576v-7Zm.75-2.25A2.25 2.25 0 0 0 8.25 8.5v5.399l-.683-.57a2.299 2.299 0 0 0-3.238 3.238l4.095 4.913a.75.75 0 0 0 .576.27h8a.75.75 0 0 0 .725-.557l1.129-4.235a3.75 3.75 0 0 0-3.093-4.678l-3.011-.43V8.5a2.25 2.25 0 0 0-2.25-2.25Z"
		clip-rule="evenodd"
	/>
</svg>
