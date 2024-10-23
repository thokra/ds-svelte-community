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
		d="M5 5.25a.75.75 0 0 0-.75.75v9A4.75 4.75 0 0 0 9 19.75h4A4.75 4.75 0 0 0 17.75 15v-.337q.361.086.75.087a3.25 3.25 0 1 0-.75-6.413V6a.75.75 0 0 0-.75-.75zm4 13A3.25 3.25 0 0 1 5.75 15V6.75h10.5V15A3.25 3.25 0 0 1 13 18.25zm9.5-5a1.74 1.74 0 0 1-.75-.168V9.918a1.75 1.75 0 1 1 .75 3.332"
		clip-rule="evenodd"
	/>
</svg>
