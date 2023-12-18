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
		d="M4.45 2.49a.747.747 0 0 0-.2.51v18c0 .414.336.75.75.75h11a.75.75 0 0 0 .75-.75V6a.75.75 0 0 0-.553-.724L10.6 3.75h7.65V21a.75.75 0 0 0 1.5 0V3a.75.75 0 0 0-.75-.75H5a.747.747 0 0 0-.55.24ZM11.25 13a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z"
		clip-rule="evenodd"
	/>
</svg>
