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
		d="M4 3.25a.75.75 0 0 0-.75.75v8.5a.75.75 0 0 0 .75.75h2.495c.084 0 .16-.042.211-.109.062-.08.13-.158.203-.232l3.5-3.5a2.25 2.25 0 0 1 3.182 0l3.5 3.5c.074.074.141.151.203.232.05.067.127.109.21.109H20a.75.75 0 0 0 .75-.75V4a.75.75 0 0 0-.75-.75H4ZM15.75 7a.75.75 0 0 1 .75-.75H18a.75.75 0 0 1 0 1.5h-1.5a.75.75 0 0 1-.75-.75Zm.75 1.75a.75.75 0 0 0 0 1.5H18a.75.75 0 0 0 0-1.5h-1.5Zm-5.03 1.72a.75.75 0 0 1 1.06 0l3.5 3.5a.75.75 0 1 1-1.06 1.06l-2.22-2.22v7.69a.75.75 0 0 1-1.5 0v-7.69l-2.22 2.22a.75.75 0 0 1-1.06-1.06l3.5-3.5Z"
		clip-rule="evenodd"
	/>
</svg>
