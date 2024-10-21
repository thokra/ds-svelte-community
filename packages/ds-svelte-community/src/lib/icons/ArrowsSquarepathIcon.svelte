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
		d="M9.03 2.97a.75.75 0 0 1 0 1.06L7.81 5.25H16A4.75 4.75 0 0 1 20.75 10v1.5a.75.75 0 0 1-1.5 0V10A3.25 3.25 0 0 0 16 6.75H7.81l1.22 1.22a.75.75 0 1 1-1.06 1.06l-2.5-2.5a.75.75 0 0 1 0-1.06l2.5-2.5a.75.75 0 0 1 1.06 0ZM4 11.75a.75.75 0 0 1 .75.75V14A3.25 3.25 0 0 0 8 17.25h8.19l-1.22-1.22a.75.75 0 1 1 1.06-1.06l2.5 2.5a.75.75 0 0 1 0 1.06l-2.5 2.5a.75.75 0 1 1-1.06-1.06l1.22-1.22H8A4.75 4.75 0 0 1 3.25 14v-1.5a.75.75 0 0 1 .75-.75Z"
		clip-rule="evenodd"
	/>
</svg>
