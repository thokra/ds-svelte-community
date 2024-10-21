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
		d="M14.612 3.04 14 3.5l-.211-.106a4 4 0 0 0-3.578 0L10 3.5l-.717-.538a2 2 0 0 0-2.501.082l-.175.15a2 2 0 0 0 .272 3.234L7 6.5v.764c0 1.841.967 3.535 2.524 4.478a4.51 4.51 0 0 0-.576.452.282.282 0 0 1-.327.036c-.046-.026-.092-.05-.139-.075l-.12-.065-1.63-.906a1.457 1.457 0 1 0-1.414 2.548l1.951 1.084c.087.048.176.086.268.115a4.532 4.532 0 0 0-.036.554c0 .09.051.17.127.217.133.083.258.183.373.298l1 1a2.12 2.12 0 0 1 .55 2.049.261.261 0 0 0 .106.293A4.479 4.479 0 0 0 12 20c.86 0 1.662-.24 2.345-.658a.26.26 0 0 0 .106-.294A2.12 2.12 0 0 1 15 17l1-1c.114-.115.24-.214.372-.298a.26.26 0 0 0 .127-.217 4.666 4.666 0 0 0-.036-.554c.091-.029.181-.067.268-.115l1.951-1.085a1.457 1.457 0 0 0-1.415-2.547l-1.73.962-.083.045-.074.04a.284.284 0 0 1-.328-.037 4.527 4.527 0 0 0-.576-.452A5.236 5.236 0 0 0 17 7.264V6.5l.155-.116a2 2 0 0 0 .214-3.015l-.143-.143a2 2 0 0 0-2.614-.185ZM12 8.942a.75.75 0 0 0-1.03 1.09l.5.5a.75.75 0 0 0 1.06 0l.5-.5A.75.75 0 0 0 12 8.94ZM10.5 6.75a.75.75 0 0 0 0 1.5h.01a.75.75 0 0 0 0-1.5h-.01Zm2.25.75a.75.75 0 0 1 .75-.75h.01a.75.75 0 0 1 0 1.5h-.01a.75.75 0 0 1-.75-.75Zm-7.22 9.03a1.371 1.371 0 0 0 0 1.94l1 1a1.371 1.371 0 0 0 1.94-1.94l-1-1a1.371 1.371 0 0 0-1.94 0Zm12.94 0a1.371 1.371 0 0 0-1.94 0l-1 1a1.371 1.371 0 1 0 1.94 1.94l1-1a1.371 1.371 0 0 0 0-1.94Z"
		clip-rule="evenodd"
	/>
</svg>
