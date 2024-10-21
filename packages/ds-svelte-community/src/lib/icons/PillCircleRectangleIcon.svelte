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
		d="M8.44 4.916a2.75 2.75 0 1 0-1.88 5.168 2.75 2.75 0 0 0 1.88-5.168Zm-4.934 1.13a4.25 4.25 0 1 1 7.988 2.908 4.25 4.25 0 0 1-7.988-2.908Zm6.108.685a.75.75 0 0 1-.448.96l-2.82 1.027a.75.75 0 1 1-.512-1.41l2.819-1.026a.75.75 0 0 1 .961.449Zm5.27 1.082a3.75 3.75 0 1 1 5.303 5.303l-7.07 7.071a3.75 3.75 0 0 1-5.304-5.303l7.071-7.071Zm1.06 1.06L12.94 11.88l3.182 3.182 3.005-3.006a2.25 2.25 0 0 0-3.182-3.182Zm-7.07 7.072 3.005-3.006 3.182 3.182-3.005 3.006a2.25 2.25 0 1 1-3.182-3.182Z"
		clip-rule="evenodd"
	/>
</svg>
