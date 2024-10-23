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
		d="m14.74 4.877-.012-.059-.001-.002v-.003l-.003-.009-.007-.025-.024-.083a4.7 4.7 0 0 0-.495-1.094C13.831 3.016 13.134 2.25 12 2.25H9c-1.085 0-1.9.711-2.377 1.256a6 6 0 0 0-.48.629.26.26 0 0 1-.211.115H4A1.75 1.75 0 0 0 2.25 6v1.94a3.31 3.31 0 0 0 3.31 3.31h1.828c.096 0 .168.088.15.183-.135.68-.31 1.63-.468 2.708-.242 1.652-.456 3.648-.417 5.444a.243.243 0 0 0 .417.163l8.697-8.697a.25.25 0 0 0 .069-.225 324 324 0 0 1-1.003-5.408l-.07-.405-.018-.103zm2.548 11.518a.254.254 0 0 0-.414-.087l-5.015 5.015a.25.25 0 0 0 .177.427H19a.75.75 0 0 0 .576-1.23l-.002-.003-.017-.02-.071-.092q-.098-.125-.277-.38c-.236-.34-.565-.848-.926-1.51-.321-.59-.668-1.3-.995-2.12m2.193-8.853-.012-.012a1.37 1.37 0 0 0-1.939 0l-.334.334a.25.25 0 0 1-.422-.13l-.186-1.011-.032-.18a.24.24 0 0 1 .077-.224 2.872 2.872 0 0 1 3.898 4.211L9.384 21.677a.25.25 0 0 1-.177.073H7.5a.123.123 0 0 1-.1-.2 1 1 0 0 1 .07-.08l12-12a1.37 1.37 0 0 0 .011-1.928"
		clip-rule="evenodd"
	/>
</svg>
