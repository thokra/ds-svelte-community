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
		d="M5.25 4A.75.75 0 0 1 6 3.25h12a.75.75 0 0 1 .75.75v4.25H20a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-.75.75h-.338l-.918 7.343a.75.75 0 0 1-.744.657H6a.75.75 0 0 1-.744-.657l-.918-7.343H4a.75.75 0 0 1-.75-.75V9A.75.75 0 0 1 4 8.25h1.25V4Zm-.26 7.25a.79.79 0 0 1 .022 0H19.25v-1.5H4.75v1.5h.24Zm13.16 1.5-.812 6.5H6.662l-.812-6.5h12.3Zm-.9-8v3.5H6.75v-3.5h10.5Zm-4.5 9.75a.75.75 0 0 0-1.5 0v3a.75.75 0 0 0 1.5 0v-3Zm-3.16-.07a.75.75 0 0 0-1.493.157l.314 2.983a.75.75 0 0 0 1.492-.157l-.314-2.983Zm5.645-.668a.75.75 0 0 1 .668.825l-.314 2.983a.75.75 0 0 1-1.492-.157l.314-2.983a.75.75 0 0 1 .824-.668Z"
		clip-rule="evenodd"
	/>
</svg>
