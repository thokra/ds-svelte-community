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
		d="M8 3.25a4.75 4.75 0 1 0 0 9.5 4.75 4.75 0 0 0 0-9.5M8.75 6a.75.75 0 0 0-1.5 0v2c0 .199.079.39.22.53l1 1a.75.75 0 0 0 1.06-1.06l-.78-.78zm7 0a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0m5.478 4.182a.75.75 0 0 0-1.456-.364l-1.12 4.485a1.25 1.25 0 0 1-1.214.947H14a.75.75 0 0 0 0 1.5h1.25V20a.75.75 0 0 0 1.5 0v-3.25h.688a2.75 2.75 0 0 0 2.668-2.083zm-3.022-1.403a.75.75 0 0 1 .515.927l-.822 2.877a1.75 1.75 0 0 1-1.435 1.251l-2.858.408a.75.75 0 1 1-.212-1.485l2.858-.408a.25.25 0 0 0 .205-.179l.822-2.876a.75.75 0 0 1 .927-.515m-5.563 6.607a.75.75 0 1 0-1.286-.772l-3 5a.75.75 0 0 0 1.286.772z"
		clip-rule="evenodd"
	/>
</svg>
