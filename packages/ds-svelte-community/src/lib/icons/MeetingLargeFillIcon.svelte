<script lang="ts" context="module">
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
		d="M6 4.75a1.25 1.25 0 0 0-1.21.937.75.75 0 0 1-1.453-.374 2.75 2.75 0 0 1 5.326 0 .75.75 0 1 1-1.452.374A1.25 1.25 0 0 0 6 4.75ZM2.25 8A.75.75 0 0 1 3 7.25h18a.75.75 0 0 1 .75.75v8a.75.75 0 0 1-.75.75H3a.75.75 0 0 1-.75-.75V8Zm8.54-2.313a1.25 1.25 0 0 1 2.42 0 .75.75 0 0 0 1.454-.374 2.75 2.75 0 0 0-5.327 0 .75.75 0 0 0 1.453.374ZM18 4.75a1.25 1.25 0 0 0-1.21.937.75.75 0 1 1-1.453-.374 2.75 2.75 0 0 1 5.326 0 .75.75 0 0 1-1.452.374A1.25 1.25 0 0 0 18 4.75ZM4.79 18.313a.75.75 0 0 0-1.453.374 2.75 2.75 0 0 0 5.326 0 .75.75 0 1 0-1.452-.374 1.25 1.25 0 0 1-2.421 0Zm5.086-.54a.75.75 0 0 1 .914.54 1.25 1.25 0 0 0 2.42 0 .75.75 0 0 1 1.454.374 2.75 2.75 0 0 1-5.327 0 .75.75 0 0 1 .54-.913Zm6.914.54a.75.75 0 0 0-1.453.374 2.75 2.75 0 0 0 5.326 0 .75.75 0 0 0-1.452-.374 1.25 1.25 0 0 1-2.421 0Z"
		clip-rule="evenodd"
	/>
</svg>
