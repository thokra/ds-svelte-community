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
		d="M4 3.25a.75.75 0 0 1 .75.75v16a.75.75 0 0 1-1.5 0V4A.75.75 0 0 1 4 3.25Zm16 0a.75.75 0 0 1 .75.75v16a.75.75 0 0 1-1.5 0V4a.75.75 0 0 1 .75-.75Z"
		clip-rule="evenodd"
	/><path
		fill="currentColor"
		fill-rule="evenodd"
		d="M20.75 6a.75.75 0 0 1-.75.75H4a.75.75 0 0 1 0-1.5h16a.75.75 0 0 1 .75.75Zm0 6.002a.75.75 0 0 1-.75.75H4a.75.75 0 0 1 0-1.5h16a.75.75 0 0 1 .75.75Z"
		clip-rule="evenodd"
	/><path
		fill="currentColor"
		fill-rule="evenodd"
		d="M8.416 5.376a.75.75 0 0 1 .208 1.04l-4 6a.75.75 0 1 1-1.248-.832l4-6a.75.75 0 0 1 1.04-.208Zm4 0a.75.75 0 0 1 .208 1.04l-4 6a.75.75 0 1 1-1.248-.832l4-6a.75.75 0 0 1 1.04-.208Zm4 0a.75.75 0 0 1 .208 1.04l-4 6a.75.75 0 1 1-1.248-.832l4-6a.75.75 0 0 1 1.04-.208Zm4 0a.75.75 0 0 1 .208 1.04l-4 6a.75.75 0 1 1-1.248-.832l4-6a.75.75 0 0 1 1.04-.208Z"
		clip-rule="evenodd"
	/>
</svg>
