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
		d="M6 3.25a.75.75 0 0 0-.75.75v4.25H4a.75.75 0 0 0-.75.75v3c0 .414.336.75.75.75h16a.75.75 0 0 0 .75-.75V9a.75.75 0 0 0-.75-.75h-1.25V4a.75.75 0 0 0-.75-.75H6Zm11.25 5v-3.5H6.75v3.5h10.5Zm-12.504 5.5a.25.25 0 0 0-.248.281l.758 6.062A.75.75 0 0 0 6 20.75h12a.75.75 0 0 0 .744-.657l.758-6.062a.25.25 0 0 0-.248-.281H4.746Zm7.254 1a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0v-3a.75.75 0 0 1 .75-.75Zm-2.41.68a.75.75 0 0 0-1.493.157l.314 2.983a.75.75 0 0 0 1.492-.157l-.314-2.983Zm5.645-.668a.75.75 0 0 1 .668.825l-.314 2.983a.75.75 0 0 1-1.492-.157l.314-2.983a.75.75 0 0 1 .824-.668Z"
		clip-rule="evenodd"
	/>
</svg>
