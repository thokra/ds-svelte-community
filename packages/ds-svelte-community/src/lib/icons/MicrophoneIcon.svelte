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
		d="M12 2.75A3.75 3.75 0 0 0 8.25 6.5v5a3.75 3.75 0 1 0 7.5 0v-5A3.75 3.75 0 0 0 12 2.75M9.75 6.5a2.25 2.25 0 0 1 4.5 0v5a2.25 2.25 0 0 1-4.5 0zm-2 4a.75.75 0 0 0-1.5 0v1a5.75 5.75 0 0 0 4.905 5.688v2.562h-1.25a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5h-1.25v-2.537A5.75 5.75 0 0 0 17.75 11.5v-1a.75.75 0 0 0-1.5 0v1a4.25 4.25 0 0 1-8.5 0z"
		clip-rule="evenodd"
	/>
</svg>
