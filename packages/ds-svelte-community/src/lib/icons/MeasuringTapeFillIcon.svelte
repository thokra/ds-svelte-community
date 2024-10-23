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
		d="M9.25 11A7.75 7.75 0 0 1 17 3.25h2c.966 0 1.75.784 1.75 1.75v10A1.75 1.75 0 0 1 19 16.75h-8A1.75 1.75 0 0 1 9.25 15zM15 8.75a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5M12.25 10a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0M4 10.75a.75.75 0 0 1 .75.75V13c0 .138.112.25.25.25h3a.75.75 0 0 1 0 1.5H5A1.75 1.75 0 0 1 3.25 13v-1.5a.75.75 0 0 1 .75-.75m0 7.5a.75.75 0 0 0 0 1.5h2.5a.75.75 0 0 0 0-1.5zm4.5 0a.75.75 0 0 0 0 1.5H11a.75.75 0 0 0 0-1.5zm3.75.75a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 0 1.5H13a.75.75 0 0 1-.75-.75m5.25-.75a.75.75 0 0 0 0 1.5H20a.75.75 0 0 0 0-1.5z"
		clip-rule="evenodd"
	/>
</svg>
