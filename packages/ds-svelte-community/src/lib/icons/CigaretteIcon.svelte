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
		d="M18.25 2.5a.75.75 0 0 0-1.5 0v.882c0 .97.548 1.855 1.415 2.289.358.18.585.546.585.947V7.5a.75.75 0 0 0 1.5 0v-.882a2.56 2.56 0 0 0-1.415-2.289 1.059 1.059 0 0 1-.585-.947V2.5ZM2.266 10a.75.75 0 0 1 .75-.75H20c.966 0 1.75.784 1.75 1.75v2A1.75 1.75 0 0 1 20 14.75H3.016a.75.75 0 0 1-.75-.75v-4ZM20 13.25a.25.25 0 0 0 .25-.25v-2a.25.25 0 0 0-.25-.25h-1.25v2.5H20Zm-16.234-2.5H17.25v2.5H3.766v-2.5Z"
		clip-rule="evenodd"
	/>
</svg>
