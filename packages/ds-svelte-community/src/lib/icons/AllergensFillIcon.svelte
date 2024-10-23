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
		d="M14.75 3.55a.75.75 0 0 1 .75-.75h.01a.75.75 0 0 1 0 1.5h-.01a.75.75 0 0 1-.75-.75m.75 2.2a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5m-7 7a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5m-.75-2.2a.75.75 0 0 1 .75-.75h.01a.75.75 0 1 1 0 1.5H8.5a.75.75 0 0 1-.75-.75m-2.213 1.973a.75.75 0 1 0-1.06-1.06l-.007.007a.75.75 0 0 0 1.06 1.06zM3.55 14.74a.75.75 0 0 1 .75.75v.01a.75.75 0 0 1-1.5 0v-.01a.75.75 0 0 1 .75-.75m1.973 3.723a.75.75 0 0 0-1.06 1.06l.007.008a.75.75 0 1 0 1.06-1.061zM7.74 20.45a.75.75 0 0 1 .75-.75h.01a.75.75 0 1 1 0 1.5h-.01a.75.75 0 0 1-.75-.75m4.79-.92a.75.75 0 0 0-1.06-1.06l-.007.007a.75.75 0 1 0 1.06 1.06zm.92-4.78a.75.75 0 0 1 .75.75v.01a.75.75 0 0 1-1.5 0v-.01a.75.75 0 0 1 .75-.75m-1.956-2.197-.024-.022-.007-.007a.75.75 0 1 1 1.067-1.055l.007.007a.75.75 0 0 1-1.043 1.077m1.043-7.03a.75.75 0 1 0-1.06-1.06l-.007.007a.75.75 0 0 0 1.06 1.06zM10.55 7.74a.75.75 0 0 1 .75.75v.01a.75.75 0 0 1-1.5 0v-.01a.75.75 0 0 1 .75-.75m4.19 5.71a.75.75 0 0 1 .75-.75h.01a.75.75 0 1 1 0 1.5h-.01a.75.75 0 0 1-.75-.75m4.79-.92a.75.75 0 0 0-1.06-1.06l-.007.007a.75.75 0 1 0 1.06 1.06zm.92-4.78a.75.75 0 0 1 .75.75v.01a.75.75 0 0 1-1.5 0V8.5a.75.75 0 0 1 .75-.75m-.92-3.28a.75.75 0 1 0-1.06 1.06l.007.007a.75.75 0 0 0 1.06-1.06z"
		clip-rule="evenodd"
	/>
</svg>
