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
		d="M12 3.75a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5ZM6.75 7.5a5.25 5.25 0 1 1 10.5 0 5.25 5.25 0 0 1-10.5 0Zm12.78 8.97a.75.75 0 0 1 0 1.06l-2.5 2.5a.75.75 0 0 1-1.06 0l-1.5-1.5a.75.75 0 1 1 1.06-1.06l.97.97 1.97-1.97a.75.75 0 0 1 1.06 0Zm-11.242.818a5.25 5.25 0 0 1 4.587-1.465.75.75 0 0 0 .25-1.479A6.752 6.752 0 0 0 5.25 21a.75.75 0 0 0 1.5 0 5.25 5.25 0 0 1 1.538-3.712Z"
		clip-rule="evenodd"
	/>
</svg>
