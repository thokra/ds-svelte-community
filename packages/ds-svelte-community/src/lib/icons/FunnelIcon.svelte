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
		d="M2.326 3.67A.75.75 0 0 1 3 3.25h18a.75.75 0 0 1 .592 1.21l-6.842 8.797V19a.75.75 0 0 1-.415.67l-4 2A.75.75 0 0 1 9.25 21v-7.743L2.408 4.46a.75.75 0 0 1-.082-.79Zm2.207 1.08 6.217 7.993v7.044l2.5-1.25v-5.794l6.217-7.993H4.533Z"
		clip-rule="evenodd"
	/>
</svg>
