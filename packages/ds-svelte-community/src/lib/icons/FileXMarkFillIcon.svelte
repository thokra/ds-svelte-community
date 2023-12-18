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
		d="M13.25 7.5v-4a.25.25 0 0 0-.25-.25H6.5c-.69 0-1.25.56-1.25 1.25v15c0 .69.56 1.25 1.25 1.25h11c.69 0 1.25-.56 1.25-1.25V9a.25.25 0 0 0-.25-.25h-4c-.69 0-1.25-.56-1.25-1.25ZM15 7.25a.25.25 0 0 1-.25-.25V4.293a.25.25 0 0 1 .427-.177l2.707 2.707a.25.25 0 0 1-.177.427H15Zm-.97 5.78a.75.75 0 1 0-1.06-1.06l-.793.793a.25.25 0 0 1-.354 0l-.793-.793a.75.75 0 1 0-1.06 1.06l.793.793a.25.25 0 0 1 0 .354l-.793.793a.75.75 0 1 0 1.06 1.06l.793-.793a.25.25 0 0 1 .354 0l.793.793a.75.75 0 1 0 1.06-1.06l-.793-.793a.25.25 0 0 1 0-.354l.793-.793Z"
		clip-rule="evenodd"
	/>
</svg>
