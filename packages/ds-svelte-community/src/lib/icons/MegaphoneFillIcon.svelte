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
		d="M18.25 6a.75.75 0 0 0-1.28-.53l-.615.614a7.3 7.3 0 0 1-3.891 2.017.256.256 0 0 0-.214.25v7.297c0 .124.091.23.214.25a7.26 7.26 0 0 1 3.891 2.018l.615.614a.75.75 0 0 0 1.28-.53zm-12.5 6a3.75 3.75 0 0 0 3.75 3.75h1a.25.25 0 0 0 .25-.25v-7a.25.25 0 0 0-.25-.25h-1A3.75 3.75 0 0 0 5.75 12m3 4.984c0-.154.137-.27.29-.256q.228.022.46.022h1.567q.308 0 .614.044l.432.061a.16.16 0 0 1 .137.16V19a.75.75 0 0 1-.75.75h-2a.75.75 0 0 1-.75-.75z"
		clip-rule="evenodd"
	/>
</svg>
