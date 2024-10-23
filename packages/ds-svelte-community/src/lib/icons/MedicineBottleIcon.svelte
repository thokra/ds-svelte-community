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
		d="M6.25 3A.75.75 0 0 1 7 2.25h10a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-.75.75h-.25v1H18a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-.75.75H6a.75.75 0 0 1-.75-.75V8.5A.75.75 0 0 1 6 7.75h1.25v-1H7A.75.75 0 0 1 6.25 6zm10 .75v1.5h-8.5v-1.5zm-1 4v-1h-6.5v1zm-8.5 12.5v-11h10.5v11zm3.75-9.5a.75.75 0 0 0-.75.75v1.25H8.5a.75.75 0 0 0-.75.75v3c0 .414.336.75.75.75h1.25v1.25c0 .414.336.75.75.75h3a.75.75 0 0 0 .75-.75v-1.25h1.25a.75.75 0 0 0 .75-.75v-3a.75.75 0 0 0-.75-.75h-1.25V11.5a.75.75 0 0 0-.75-.75zm.75 2.75v-1.25h1.5v1.25c0 .414.336.75.75.75h1.25v1.5H13.5a.75.75 0 0 0-.75.75v1.25h-1.5V16.5a.75.75 0 0 0-.75-.75H9.25v-1.5h1.25a.75.75 0 0 0 .75-.75"
		clip-rule="evenodd"
	/>
</svg>
