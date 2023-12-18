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
		d="M14.25 3.75a.5.5 0 0 0-.5-.5h-3.5a.5.5 0 0 0-.5.5v16.5a.5.5 0 0 0 .5.5h3.5a.5.5 0 0 0 .5-.5V3.75Zm1.5 16.5a.5.5 0 0 0 .5.5H20a.75.75 0 0 0 .75-.75V4a.75.75 0 0 0-.75-.75h-3.75a.5.5 0 0 0-.5.5v16.5ZM4 3.25h3.75a.5.5 0 0 1 .5.5v16.5a.5.5 0 0 1-.5.5H4a.75.75 0 0 1-.75-.75V4A.75.75 0 0 1 4 3.25Z"
		clip-rule="evenodd"
	/>
</svg>
