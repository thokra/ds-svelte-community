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
		d="M4 5.25A1.75 1.75 0 0 0 2.25 7v10c0 .966.784 1.75 1.75 1.75h11A1.75 1.75 0 0 0 16.75 17v-1.572l4.021 1.286A.75.75 0 0 0 21.75 16V8a.75.75 0 0 0-.979-.714L16.75 8.573V7A1.75 1.75 0 0 0 15 5.25H4Zm16.25 3.777-3.5 1.12v3.705l3.5 1.12V9.028ZM15 17.25a.25.25 0 0 0 .25-.25V7a.25.25 0 0 0-.25-.25H4a.25.25 0 0 0-.25.25v10c0 .138.112.25.25.25h11Z"
		clip-rule="evenodd"
	/>
</svg>
