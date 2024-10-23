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
		d="M9.5 3.25a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5M6 7.75a.75.75 0 0 0-.72.538l-2.5 8.5a.75.75 0 0 0 .72.962h1.75v2.75a.75.75 0 0 0 1.5 0v-2.75h1.5v2.75a.75.75 0 0 0 1.5 0v-2.75h1.75a.75.75 0 0 0 .72-.962l-1.63-5.538h1.91a.75.75 0 0 0 0-1.5h-2.428a3.75 3.75 0 0 0-3.317-2zm8 7.5a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5zm3-4a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-.75.75h-2a.75.75 0 0 1-.711-.513l-.33-.987H13.5a.75.75 0 0 1 0-1.5h1a.75.75 0 0 1 .711.513l.33.987h.709V12a.75.75 0 0 1 .75-.75m2.5 1a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5"
		clip-rule="evenodd"
	/>
</svg>
