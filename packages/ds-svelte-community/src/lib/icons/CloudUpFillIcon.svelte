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
		d="M11 2.25A5.75 5.75 0 0 0 5.25 8c0 .052-.017.1-.074.157a.656.656 0 0 1-.325.158A3.25 3.25 0 0 0 5.5 14.75h.485c.149 0 .263-.13.265-.279.007-.566.227-1.13.659-1.562l3.5-3.5a2.25 2.25 0 0 1 3.182 0l3.5 3.5c.418.418.637.96.657 1.507.006.159.14.292.296.264a4.501 4.501 0 0 0-.794-8.93h-.745c-.09 0-.236-.066-.33-.26A5.746 5.746 0 0 0 11 2.25Zm.47 8.22a.75.75 0 0 1 1.06 0l3.5 3.5a.75.75 0 1 1-1.06 1.06l-2.22-2.22v7.69a.75.75 0 0 1-1.5 0v-7.69l-2.22 2.22a.75.75 0 0 1-1.06-1.06l3.5-3.5Z"
		clip-rule="evenodd"
	/>
</svg>
