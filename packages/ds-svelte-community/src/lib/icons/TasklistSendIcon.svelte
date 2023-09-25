<script lang="ts" context="module">
	import newUniqueId from "locally-unique-id-generator";
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
		d="M5.75 20.25V3.75h12.5v9.75a.75.75 0 0 0 1.5 0v-10c0-.69-.56-1.25-1.25-1.25h-13c-.69 0-1.25.56-1.25 1.25v17c0 .69.56 1.25 1.25 1.25h1.742a.75.75 0 0 0 0-1.5H5.75ZM11.069 5.9a.75.75 0 0 1 .15 1.05l-1.5 2a.75.75 0 0 1-1.13.08l-1-1a.75.75 0 0 1 1.06-1.06l.389.388.98-1.308a.75.75 0 0 1 1.05-.15Zm1.3 2.1a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 0 1.5h-2.5a.75.75 0 0 1-.75-.75Zm-2.883 4.454a.75.75 0 0 1 .819-.14l9 4a.75.75 0 0 1 0 1.371l-9 4a.75.75 0 0 1-1.007-.948L10.699 17l-1.401-3.737a.75.75 0 0 1 .188-.809Zm2.534 3.796H14a.75.75 0 0 1 0 1.5h-1.98l-.69 1.838L17.154 17l-5.822-2.588.689 1.838Z"
		clip-rule="evenodd"
	/>
</svg>
