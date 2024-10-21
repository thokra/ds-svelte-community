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
		d="M11.25 15.677c0-.091.05-.175.129-.219l3.47-1.928a1.75 1.75 0 0 0 0-3.06l-3.47-1.928a.25.25 0 0 1-.129-.219V7a.75.75 0 0 1 1.114-.656l9 5a.75.75 0 0 1 0 1.312l-9 5A.75.75 0 0 1 11.25 17v-1.323ZM5.364 6.344A.75.75 0 0 0 4.25 7v10a.75.75 0 0 0 1.114.656l9-5a.75.75 0 0 0 0-1.312l-9-5Z"
		clip-rule="evenodd"
	/>
</svg>
