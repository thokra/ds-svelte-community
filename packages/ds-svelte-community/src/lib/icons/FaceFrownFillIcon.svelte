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
		d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm5-1.75a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm6.5 0a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm2.657 7.38a.75.75 0 0 1-1.037-.223c-.692-1.072-1.993-1.657-3.37-1.657s-2.678.585-3.37 1.657a.75.75 0 1 1-1.26-.814C8.4 14.998 10.238 14.25 12 14.25s3.6.748 4.63 2.343a.75.75 0 0 1-.223 1.037Z"
		clip-rule="evenodd"
	/>
</svg>
