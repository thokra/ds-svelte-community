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
		d="M13.44 5.616a1.25 1.25 0 0 1 .884-.366h4.172a.25.25 0 0 1 .25.25v4.172c0 .331-.132.649-.366.883l-8.207 8.208a.25.25 0 0 1-.354 0l-4.586-4.586a.25.25 0 0 1 0-.354l8.207-8.207Zm.884-1.866c-.73 0-1.429.29-1.944.805l-8.207 8.208a1.75 1.75 0 0 0 0 2.474l4.585 4.586a1.75 1.75 0 0 0 2.475 0l8.207-8.207a2.75 2.75 0 0 0 .806-1.944V5.5a1.75 1.75 0 0 0-1.75-1.75h-4.172ZM15.496 10a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
		clip-rule="evenodd"
	/>
</svg>
