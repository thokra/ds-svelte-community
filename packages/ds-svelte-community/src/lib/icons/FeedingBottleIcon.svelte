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
		d="M19.939 2.293a2.25 2.25 0 0 0-2.592 1.554 3.75 3.75 0 0 0-3.468.971l-.349-.348a.75.75 0 1 0-1.06 1.06l.216.217-2.127.912a2.8 2.8 0 0 0-.862.583l-6.02 6.02a1.75 1.75 0 0 0 0 2.475l4.586 4.586a1.75 1.75 0 0 0 2.474 0l6.021-6.02a2.8 2.8 0 0 0 .583-.862l.912-2.127.217.216a.75.75 0 1 0 1.06-1.06l-.348-.349a3.75 3.75 0 0 0 .971-3.468 2.25 2.25 0 0 0 .938-3.744 2.25 2.25 0 0 0-1.152-.616M19.5 5.25a.75.75 0 1 0-.75-.75 3.8 3.8 0 0 1 .75.75m-1.379 3.81a2.25 2.25 0 0 0-3.181-3.18zM11.15 8.038l2.679-1.149 3.282 3.282-.034.079H8.81l1.947-1.947a1.3 1.3 0 0 1 .392-.265m-6.413 6.285L7.31 11.75h9.123l-.472 1.1a1.3 1.3 0 0 1-.265.392l-6.02 6.02a.25.25 0 0 1-.354 0l-4.586-4.585a.25.25 0 0 1 0-.354"
		clip-rule="evenodd"
	/>
</svg>
