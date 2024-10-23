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
		d="M18.894 5.106a3.75 3.75 0 0 0-5.303 0L10.055 8.64a.25.25 0 0 0 0 .354l4.95 4.95a.25.25 0 0 0 .354 0l3.535-3.536a3.75 3.75 0 0 0 0-5.303m-4.95 10.253a.25.25 0 0 0 0-.354l-4.95-4.95a.25.25 0 0 0-.353 0L5.106 13.59a3.75 3.75 0 1 0 5.303 5.303z"
		clip-rule="evenodd"
	/>
</svg>
