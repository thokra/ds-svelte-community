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
		d="M10 4.75a.75.75 0 0 1 .75.75v1.25H16a.75.75 0 0 1 0 1.5h-1.948a14.6 14.6 0 0 1-2.995 5.197q.22.198.448.386a.75.75 0 0 1-.953 1.158 15 15 0 0 1-.552-.478 14.6 14.6 0 0 1-4.212 2.68.75.75 0 0 1-.576-1.385 13.1 13.1 0 0 0 3.73-2.361A14.6 14.6 0 0 1 5.949 8.25H4a.75.75 0 0 1 0-1.5h5.25V5.5a.75.75 0 0 1 .75-.75m2.464 3.5A13.1 13.1 0 0 1 10 12.378 13.1 13.1 0 0 1 7.536 8.25zm3.036 1.5a.75.75 0 0 1 .685.445l4 9a.75.75 0 0 1-1.37.61L17.9 17.75h-4.8l-.914 2.055a.75.75 0 0 1-1.37-.61l4-9a.75.75 0 0 1 .685-.445m0 2.597 1.735 3.903h-3.47z"
		clip-rule="evenodd"
	/>
</svg>
