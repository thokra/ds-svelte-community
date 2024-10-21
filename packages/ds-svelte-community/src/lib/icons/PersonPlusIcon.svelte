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
		d="M12 3.75a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5ZM6.75 7.5a5.25 5.25 0 1 1 10.5 0 5.25 5.25 0 0 1-10.5 0Zm4.827 8.25A5.25 5.25 0 0 0 6.327 21a.75.75 0 0 1-1.5 0 6.75 6.75 0 0 1 8.069-6.62.75.75 0 0 1-.293 1.471 5.249 5.249 0 0 0-1.026-.101Zm5.423-.5a.75.75 0 0 1 .75.75v1.75h1.75a.75.75 0 0 1 0 1.5h-1.75V21a.75.75 0 0 1-1.5 0v-1.75H14.5a.75.75 0 0 1 0-1.5h1.75V16a.75.75 0 0 1 .75-.75Z"
		clip-rule="evenodd"
	/>
</svg>
