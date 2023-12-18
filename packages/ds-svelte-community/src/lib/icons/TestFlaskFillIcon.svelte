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
		d="M9.203 9.24V4.75H9a.75.75 0 0 1 0-1.5h6a.75.75 0 0 1 0 1.5h-.203v4.49l5.473 7.49c.635.87.603 1.907.12 2.701-.475.785-1.373 1.319-2.44 1.319H6.05c-1.067 0-1.965-.534-2.44-1.319a2.395 2.395 0 0 1 .12-2.7l5.473-7.492Zm4.239.687a.75.75 0 0 1-.145-.443V4.75h-2.594v4.734a.75.75 0 0 1-.144.443l-.967 1.323h4.817l-.967-1.323Z"
		clip-rule="evenodd"
	/>
</svg>
