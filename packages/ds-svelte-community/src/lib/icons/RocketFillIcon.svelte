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
		d="M12.97 5.97a7.821 7.821 0 0 1 6.636-2.213.75.75 0 0 1 .636.637 7.821 7.821 0 0 1-2.212 6.636l-1.707 1.707a.25.25 0 0 0-.073.177V17.5a.75.75 0 0 1-.22.53l-3 3a.75.75 0 0 1-1.265-.383l-.716-3.578a5.263 5.263 0 0 0-.152-.584.257.257 0 0 1 .061-.261l2.633-2.633a2.25 2.25 0 1 0-3.182-3.182l-2.633 2.633a.257.257 0 0 1-.261.06 5.289 5.289 0 0 0-.584-.151l-3.578-.716a.75.75 0 0 1-.383-1.265l3-3a.75.75 0 0 1 .53-.22h4.586a.25.25 0 0 0 .177-.073L12.97 5.97Zm-.44 6.56a.75.75 0 1 0-1.06-1.06l-4 4a.75.75 0 1 0 1.06 1.06l4-4Z"
		clip-rule="evenodd"
	/>
</svg>
