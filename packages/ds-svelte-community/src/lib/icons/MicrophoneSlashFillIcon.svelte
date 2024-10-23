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
		d="M8.51 5.126a.24.24 0 0 0 .056.258l6.755 6.755c.136.136.367.072.393-.12q.036-.255.036-.519v-5a3.75 3.75 0 0 0-7.24-1.374M8.25 11.5c0-.025.03-.038.048-.02l3.722 3.722a.028.028 0 0 1-.02.048 3.75 3.75 0 0 1-3.75-3.75m4.163 4.23a.26.26 0 0 1 .208.073l.876.876c.132.132.078.356-.103.4q-.255.064-.517.105a.26.26 0 0 0-.222.252V19.5c0 .138.112.25.25.25h1a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1 0-1.5h1a.25.25 0 0 0 .25-.25v-2.096a.26.26 0 0 0-.213-.251A5.75 5.75 0 0 1 6.25 11.5v-1a.75.75 0 0 1 1.5 0v1a4.25 4.25 0 0 0 4.663 4.23m4.91-2.053a.24.24 0 0 1-.392.073l-.79-.791a.26.26 0 0 1-.063-.257c.112-.381.172-.785.172-1.202v-1a.75.75 0 0 1 1.5 0v1c0 .77-.151 1.505-.426 2.177M6.53 5.47a.75.75 0 0 0-1.06 1.06l12 12a.75.75 0 1 0 1.06-1.06z"
		clip-rule="evenodd"
	/>
</svg>
