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
		d="M3.361 4.25c-.614 0-1.111.56-1.111 1.25v11c0 .69.497 1.25 1.111 1.25H3.5c.138 0 .25-.112.259-.25a3.5 3.5 0 0 1 6.982 0c.01.138.12.25.259.25h2.5c.138 0 .25-.112.259-.25.038-.541.2-1.048.456-1.494a.26.26 0 0 0 .035-.13V5.5c0-.69-.498-1.25-1.111-1.25H3.36ZM21.75 16.5c0 .498-.291.928-.713 1.129-.142.068-.288-.05-.302-.207a3.5 3.5 0 0 0-4.619-2.984c-.174.06-.366-.063-.366-.247V7.5a.25.25 0 0 1 .25-.25h2.662c.51 0 .97.311 1.16.786l1.91 4.775a.25.25 0 0 1 .018.093V16.5Zm-7 1.25a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0Zm-7.5-2.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Z"
		clip-rule="evenodd"
	/>
</svg>
