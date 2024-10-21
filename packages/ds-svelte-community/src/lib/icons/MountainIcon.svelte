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
		d="M12.65 5.563a.75.75 0 0 0-1.3 0l-7 12.124A.75.75 0 0 0 5 18.812h14a.75.75 0 0 0 .65-1.125l-7-12.124Zm-3.223 6.332L12 7.438l2.074 3.592-1.437-.267a.75.75 0 0 0-.587.137l-1.697 1.273-.926-.278Zm-.77 1.335-2.358 4.082h11.402l-2.64-4.573-2.374-.441L10.95 13.6a.75.75 0 0 1-.666.118l-1.628-.488Z"
		clip-rule="evenodd"
	/>
</svg>
