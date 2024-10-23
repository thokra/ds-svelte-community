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
		d="M12 6.25a3.25 3.25 0 1 0 0 6.5 3.25 3.25 0 0 0 0-6.5m-2.5 7a.75.75 0 0 0-.75.75v4c0 .414.336.75.75.75h.75V21a.75.75 0 0 0 1.5 0v-2.25h.5V21a.75.75 0 0 0 1.5 0v-2.25h.75a.75.75 0 0 0 .75-.75v-4a.75.75 0 0 0-.75-.75z"
		clip-rule="evenodd"
	/>
</svg>
