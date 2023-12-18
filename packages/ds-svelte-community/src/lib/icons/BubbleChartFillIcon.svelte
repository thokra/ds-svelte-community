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
		d="M4.25 7.169a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0Zm7 3a4.75 4.75 0 1 1 9.5 0 4.75 4.75 0 0 1-9.5 0ZM7 11.419a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5Z"
		clip-rule="evenodd"
	/>
</svg>
