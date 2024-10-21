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
		d="M12 3.75a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5ZM6.75 7.5a5.25 5.25 0 1 1 10.5 0 5.25 5.25 0 0 1-10.5 0ZM12 15.75A5.25 5.25 0 0 0 6.75 21a.75.75 0 0 1-1.5 0A6.75 6.75 0 0 1 12 14.25a.75.75 0 0 1 0 1.5Zm4.47-1.78a.75.75 0 0 1 1.06 0l4 4a.75.75 0 0 1 0 1.06l-2 2a.75.75 0 0 1-1.06 0L17 19.56l-2.47 2.47a.75.75 0 1 1-1.06-1.06l2.47-2.47-1.47-1.47a.75.75 0 0 1 0-1.06l2-2Zm3.47 4.53-.94.94-2.94-2.94.94-.94 2.94 2.94Z"
		clip-rule="evenodd"
	/>
</svg>
