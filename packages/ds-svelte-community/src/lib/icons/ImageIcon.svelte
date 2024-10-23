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
		d="M4 5.75a.25.25 0 0 0-.25.25v12c0 .138.112.25.25.25h5.599l3.777-5.666a.75.75 0 0 1 1.248 0l3.777 5.666H20a.25.25 0 0 0 .25-.25V6a.25.25 0 0 0-.25-.25zm12.599 12.5L14 14.352l-2.599 3.898zM2.25 6c0-.966.784-1.75 1.75-1.75h16c.966 0 1.75.784 1.75 1.75v12A1.75 1.75 0 0 1 20 19.75H4A1.75 1.75 0 0 1 2.25 18zM8 8.75a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5M5.25 10a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0"
		clip-rule="evenodd"
	/>
</svg>
