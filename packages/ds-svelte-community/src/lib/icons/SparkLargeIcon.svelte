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
		d="M12.75 3a.75.75 0 0 0-1.5 0v6a.75.75 0 0 0 1.5 0zM15 11.25a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5zm-3 3a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-1.5 0v-6a.75.75 0 0 1 .75-.75m-9-3a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5zm15.894-6.144a.75.75 0 0 1 0 1.06l-4.243 4.243a.75.75 0 0 1-1.06-1.06l4.242-4.243a.75.75 0 0 1 1.061 0m-4.243 8.485a.75.75 0 1 0-1.06 1.06l4.242 4.243a.75.75 0 0 0 1.061-1.06zm-4.242 0a.75.75 0 0 1 0 1.06l-4.242 4.243a.75.75 0 1 1-1.061-1.06l4.243-4.243a.75.75 0 0 1 1.06 0M6.167 5.106a.75.75 0 1 0-1.061 1.06l4.243 4.243a.75.75 0 1 0 1.06-1.06z"
		clip-rule="evenodd"
	/>
</svg>
