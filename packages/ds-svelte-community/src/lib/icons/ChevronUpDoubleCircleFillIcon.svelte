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
		d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm10.28-1.03 3.5 3.5a.75.75 0 1 1-1.06 1.06L12 12.56l-2.97 2.97a.75.75 0 0 1-1.06-1.06l3.5-3.5a.75.75 0 0 1 1.06 0Zm0-4a.75.75 0 0 0-1.06 0l-3.5 3.5a.75.75 0 1 0 1.06 1.06L12 8.56l2.97 2.97a.75.75 0 1 0 1.06-1.06l-3.5-3.5Z"
		clip-rule="evenodd"
	/>
</svg>
