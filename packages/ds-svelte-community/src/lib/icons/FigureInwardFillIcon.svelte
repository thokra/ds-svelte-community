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
		d="M12 2.25a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5Zm-4.58 7.998A1.75 1.75 0 0 1 9.154 8.25h5.694a1.75 1.75 0 0 1 1.733 1.998l-.837 5.858a.75.75 0 0 1-.743.644h-.75V21a.75.75 0 0 1-1.5 0v-4.25h-1.5V21a.75.75 0 0 1-1.5 0v-4.25H9a.75.75 0 0 1-.742-.644l-.837-5.859Z"
		clip-rule="evenodd"
	/>
</svg>
