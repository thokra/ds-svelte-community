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
		d="M7.75 8a4.25 4.25 0 1 1 8.5 0 4.25 4.25 0 0 1-8.5 0ZM12 2.25A5.75 5.75 0 0 0 6.25 8v4.632a.25.25 0 0 0 .138.224l.962.48 4.118 2.288a.25.25 0 0 0 .26-.01l4.853-3.236 1.06-.72a.25.25 0 0 0 .109-.207V8A5.75 5.75 0 0 0 12 2.25ZM6.25 14.868a.25.25 0 0 1 .362-.224l.038.02 3.188 1.77a.25.25 0 0 1 .018.427l-2.661 1.775a.241.241 0 0 1-.352-.09A5.727 5.727 0 0 1 6.25 16v-1.132Zm1.826 5.335a.24.24 0 0 1 .036-.376l9.304-6.203a.214.214 0 0 1 .334.177V16a5.75 5.75 0 0 1-9.674 4.203ZM9.75 8a.75.75 0 0 1 .75-.75h.01a.75.75 0 0 1 0 1.5h-.01A.75.75 0 0 1 9.75 8Zm3.75-.75a.75.75 0 0 0 0 1.5h.01a.75.75 0 0 0 0-1.5h-.01Z"
		clip-rule="evenodd"
	/>
</svg>
