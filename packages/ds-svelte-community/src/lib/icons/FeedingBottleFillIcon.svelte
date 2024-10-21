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
		d="M18.639 2.421a2.25 2.25 0 1 1 1.514 4.232 3.751 3.751 0 0 1-.971 3.468l.348.349a.75.75 0 1 1-1.06 1.06l-.217-.216-.912 2.127a2.75 2.75 0 0 1-.583.862l-6.02 6.02a1.75 1.75 0 0 1-2.476 0l-4.585-4.586a1.75 1.75 0 0 1 0-2.474l6.02-6.021a2.75 2.75 0 0 1 .862-.583l2.127-.912-.216-.217a.75.75 0 0 1 1.06-1.06l.349.348a3.75 3.75 0 0 1 3.468-.971 2.25 2.25 0 0 1 1.292-1.426Zm-4.81 4.468-2.68 1.149a1.25 1.25 0 0 0-.39.265L8.81 10.25h8.266l.033-.079L13.83 6.89Z"
		clip-rule="evenodd"
	/>
</svg>
