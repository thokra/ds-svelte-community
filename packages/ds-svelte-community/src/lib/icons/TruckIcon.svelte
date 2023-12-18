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
		d="M3.5 4.25c-.69 0-1.25.56-1.25 1.25v11c0 .69.56 1.25 1.25 1.25h1.25a2.5 2.5 0 0 0 5 0h5a2.5 2.5 0 0 0 5 0h.75c.69 0 1.25-.56 1.25-1.25v-3.644l-1.928-4.82a1.25 1.25 0 0 0-1.16-.786H15.75V5.5c0-.69-.56-1.25-1.25-1.25h-11Zm3.75 11c.818 0 1.544.393 2 1h5V5.75H3.75v10.5h1.5c.456-.607 1.182-1 2-1Zm10 0a2.49 2.49 0 0 0-1.5.5v-7h2.742l1.758 4.394v3.106h-1a2.496 2.496 0 0 0-2-1Zm0 1.5a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm-11 1a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z"
		clip-rule="evenodd"
	/>
</svg>
