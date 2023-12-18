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
		d="M12 3.75A8.25 8.25 0 0 0 3.75 12a8.254 8.254 0 0 0 5.5 7.78 8.23 8.23 0 0 0 2.75.47.75.75 0 0 1 0 1.5 9.736 9.736 0 0 1-3.25-.555A9.754 9.754 0 0 1 2.25 12 9.75 9.75 0 0 1 12 2.25a9.754 9.754 0 0 1 9.195 6.5A9.736 9.736 0 0 1 21.75 12a.75.75 0 0 1-1.5 0 8.23 8.23 0 0 0-.47-2.75A8.254 8.254 0 0 0 12 3.75Z"
		clip-rule="evenodd"
	/>
</svg>
