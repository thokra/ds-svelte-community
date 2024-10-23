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
		d="M7 2.25a.75.75 0 0 0-.75.75v3c0 .414.336.75.75.75h.25v1H6a.75.75 0 0 0-.75.75V21c0 .414.336.75.75.75h12a.75.75 0 0 0 .75-.75V8.5a.75.75 0 0 0-.75-.75h-1.25v-1H17a.75.75 0 0 0 .75-.75V3a.75.75 0 0 0-.75-.75zm8.25 5.5v-1h-6.5v1zm-2 3.75h-2.5a.25.25 0 0 0-.25.25v1.5a.25.25 0 0 1-.25.25h-1.5a.25.25 0 0 0-.25.25v2.5c0 .138.112.25.25.25h1.5a.25.25 0 0 1 .25.25v1.5c0 .138.112.25.25.25h2.5a.25.25 0 0 0 .25-.25v-1.5a.25.25 0 0 1 .25-.25h1.5a.25.25 0 0 0 .25-.25v-2.5a.25.25 0 0 0-.25-.25h-1.5a.25.25 0 0 1-.25-.25v-1.5a.25.25 0 0 0-.25-.25"
		clip-rule="evenodd"
	/>
</svg>
