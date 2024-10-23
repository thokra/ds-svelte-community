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
		d="M10.651 3.944A4.752 4.752 0 0 0 12 13.25a4.75 4.75 0 0 0 2.933-8.487c.02.346-.03.687-.144.993-.6 1.626-2.684 1.99-4.112.75a.75.75 0 1 1 .983-1.133c.808.701 1.56.301 1.722-.136a.95.95 0 0 0-.258-1.027c-.313-.284-.97-.6-2.473-.266M12 2.25a6.25 6.25 0 1 0 0 12.5 6.25 6.25 0 0 0 0-12.5m-1.5 6.5a.75.75 0 0 0 0 1.5h.01a.75.75 0 0 0 0-1.5zm2.25.75a.75.75 0 0 1 .75-.75h.01a.75.75 0 0 1 0 1.5h-.01a.75.75 0 0 1-.75-.75m-3.402 8.848A3.75 3.75 0 0 1 15.75 21a.75.75 0 0 0 1.5 0 5.25 5.25 0 1 0-10.5 0 .75.75 0 0 0 1.5 0 3.75 3.75 0 0 1 1.098-2.652"
		clip-rule="evenodd"
	/>
</svg>
