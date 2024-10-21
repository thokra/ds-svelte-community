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
		d="M10.79 5.687a1.25 1.25 0 0 1 2.42 0 .75.75 0 0 0 1.454-.374 2.75 2.75 0 0 0-5.327 0 .75.75 0 0 0 1.453.374ZM4.25 8A.75.75 0 0 1 5 7.25h14a.75.75 0 0 1 .75.75v8a.75.75 0 0 1-.75.75H5a.75.75 0 0 1-.75-.75V8Zm5.626 9.774a.75.75 0 0 1 .914.539 1.25 1.25 0 0 0 2.42 0 .75.75 0 0 1 1.454.374 2.75 2.75 0 0 1-5.327 0 .75.75 0 0 1 .54-.913Z"
		clip-rule="evenodd"
	/>
</svg>
