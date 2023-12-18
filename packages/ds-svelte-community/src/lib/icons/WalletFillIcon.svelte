<script lang="ts" context="module">
	import newUniqueId from "$lib/components/local-unique-id";
	import type { SVGAttributes } from "svelte/elements";
</script>

<script lang="ts">
	/**
	 * Title of the icon, used for accessibility
	 */
	export let title = "";

	type $$Props = SVGAttributes<SVGElement> & {
		title?: string;
	};

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
	{...$$restProps}
>
	{#if title}
		<title {id}>{title}</title>
	{/if}
	<slot />
	<path
		fill="currentColor"
		fill-rule="evenodd"
		d="M16.67 2.665a.75.75 0 0 0-.867-.388l-4.519 1.232c-.281.077-.226.491.066.491h5.584a.25.25 0 0 0 .224-.362l-.487-.973ZM4 5.25A1.75 1.75 0 0 0 2.25 7v11c0 .966.784 1.75 1.75 1.75h15A1.75 1.75 0 0 0 20.75 18v-1.25a.25.25 0 0 0-.25-.25h-5.154a4.22 4.22 0 0 1-.623-.062 4.27 4.27 0 0 1-1.25-.426 3.605 3.605 0 0 1-1.376-1.27c-.39-.62-.597-1.373-.597-2.242 0-.87.208-1.622.597-2.242a3.604 3.604 0 0 1 1.376-1.27A4.27 4.27 0 0 1 15.35 8.5h5.15a.25.25 0 0 0 .25-.25V7A1.75 1.75 0 0 0 19 5.25H4ZM20 10h-4.647S13 10 13 12.5s2.353 2.5 2.353 2.5H20a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1Zm-4.5 1.75a.75.75 0 0 0 0 1.5h.01a.75.75 0 0 0 0-1.5h-.01Z"
		clip-rule="evenodd"
	/>
</svg>
