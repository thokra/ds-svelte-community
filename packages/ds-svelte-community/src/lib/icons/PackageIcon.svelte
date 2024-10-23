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
		d="M11.625 2.35a.75.75 0 0 1 .75 0l7.794 4.5a.75.75 0 0 1 .375.65v9a.75.75 0 0 1-.375.65l-7.794 4.5a.75.75 0 0 1-.75 0l-7.794-4.5a.75.75 0 0 1-.375-.65v-9a.75.75 0 0 1 .375-.65zM12 3.866 5.706 7.5 12 11.134 18.294 7.5zm7.044 4.933-6.294 3.634v7.268l6.294-3.634zM11.25 19.701v-7.268L4.956 8.799v7.268z"
		clip-rule="evenodd"
	/>
</svg>
