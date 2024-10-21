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
		d="M11.575 4.382a.75.75 0 0 1 .85 0l8 5.5a.75.75 0 0 1 0 1.236l-8 5.5a.75.75 0 0 1-.85 0l-8-5.5a.75.75 0 0 1 0-1.236l8-5.5ZM12.75 8.5a.75.75 0 0 0-1.5 0v1.25H9.5a.75.75 0 0 0 0 1.5h1.75v1.25a.75.75 0 0 0 1.5 0v-1.25h1.75a.75.75 0 0 0 0-1.5h-1.75V8.5Zm-8.325 4.382a.75.75 0 1 0-.85 1.236l8 5.5a.75.75 0 0 0 .85 0l8-5.5a.75.75 0 1 0-.85-1.236L12 18.09l-7.575-5.208Z"
		clip-rule="evenodd"
	/>
</svg>
