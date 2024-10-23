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
		d="M11 2.25A5.75 5.75 0 0 0 5.25 8c0 .052-.017.1-.074.157a.66.66 0 0 1-.325.158A3.25 3.25 0 0 0 5.5 14.75a.75.75 0 0 0 0-1.5 1.75 1.75 0 0 1-.35-3.465c.745-.151 1.6-.747 1.6-1.785a4.25 4.25 0 0 1 8.076-1.854c.288.593.896 1.104 1.68 1.104h.744a3 3 0 0 1 1 5.83.75.75 0 1 0 .5 1.414 4.501 4.501 0 0 0-1.5-8.744h-.745c-.09 0-.236-.066-.33-.26A5.75 5.75 0 0 0 11 2.25m.47 8.22a.75.75 0 0 1 1.06 0l3.5 3.5a.75.75 0 1 1-1.06 1.06l-2.22-2.22v7.69a.75.75 0 0 1-1.5 0v-7.69l-2.22 2.22a.75.75 0 0 1-1.06-1.06z"
		clip-rule="evenodd"
	/>
</svg>
