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
		d="M9.25 5a.25.25 0 0 1 .25-.25h5a.25.25 0 0 1 .25.25v1.25h-5.5V5Zm-1.5 1.25V5c0-.966.784-1.75 1.75-1.75h5c.966 0 1.75.784 1.75 1.75v1.25H20c.966 0 1.75.784 1.75 1.75v10A1.75 1.75 0 0 1 20 19.75H4A1.75 1.75 0 0 1 2.25 18V8c0-.966.784-1.75 1.75-1.75h3.75Zm5 4.25a.75.75 0 0 0-1.5 0v1.75H9.5a.75.75 0 0 0 0 1.5h1.75v1.75a.75.75 0 0 0 1.5 0v-1.75h1.75a.75.75 0 0 0 0-1.5h-1.75V10.5Z"
		clip-rule="evenodd"
	/>
</svg>
