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
		d="M8 5.25a2.75 2.75 0 0 0-2.2 1.1l-2.1 2.8a.473.473 0 0 1-.136.102 3.405 3.405 0 0 1-.173.092l-.032.017c-.06.03-.13.066-.199.103A1.75 1.75 0 0 0 2.25 11v3a1.75 1.75 0 0 0 1.22 1.668c.145.046.28-.071.293-.222a3.5 3.5 0 0 1 6.978.054c.01.138.12.25.259.25h2.5c.138 0 .25-.112.259-.25a3.5 3.5 0 0 1 6.906-.521c.037.164.215.263.352.165a1.75 1.75 0 0 0 .733-1.425v-1.526a1.75 1.75 0 0 0-1.136-1.639L17.538 9.4a.25.25 0 0 1-.112-.084L15.2 6.35a2.75 2.75 0 0 0-2.2-1.1H8Zm-1 2a1.25 1.25 0 0 1 1-.5h.5a.25.25 0 0 1 .25.25v2a.25.25 0 0 1-.25.25H6a.25.25 0 0 1-.2-.4L7 7.25Zm3.5-.5a.25.25 0 0 0-.25.25v2c0 .138.112.25.25.25H15a.25.25 0 0 0 .2-.4L14 7.25a1.25 1.25 0 0 0-1-.5h-2.5Zm-5.75 9a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0Zm10 0a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0Z"
		clip-rule="evenodd"
	/>
</svg>
