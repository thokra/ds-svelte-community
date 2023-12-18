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
		d="M18.25 2.5a.75.75 0 0 0-1.5 0v.882c0 .97.548 1.855 1.415 2.289.358.18.585.546.585.947V7.5a.75.75 0 0 0 1.5 0v-.882a2.56 2.56 0 0 0-1.415-2.289 1.059 1.059 0 0 1-.585-.947V2.5ZM7.03 6.47a.75.75 0 0 0-1.06 1.06l10 10a.75.75 0 1 0 1.06-1.06l-10-10ZM3 9.25a.75.75 0 0 0-.75.75v4c0 .414.336.75.75.75h6.5a.75.75 0 0 0 .53-1.28l-4-4a.75.75 0 0 0-.53-.22H3Zm14.25.25a.25.25 0 0 0-.25-.25h-3a.75.75 0 0 0-.53 1.28l3.353 3.354a.25.25 0 0 0 .427-.177V9.5Zm1.5 5c0 .138.112.25.25.25h1A1.75 1.75 0 0 0 21.75 13v-2A1.75 1.75 0 0 0 20 9.25h-1a.25.25 0 0 0-.25.25v5Z"
		clip-rule="evenodd"
	/>
</svg>
