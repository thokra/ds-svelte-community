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
		d="M3.25 5c0-.966.784-1.75 1.75-1.75h3.5a.75.75 0 0 1 0 1.5H5a.25.25 0 0 0-.25.25v14c0 .138.112.25.25.25h3.5a.75.75 0 0 1 0 1.5H5A1.75 1.75 0 0 1 3.25 19V5Zm4.5 7a.75.75 0 0 1 .75-.75h9.69l-3.22-3.22a.75.75 0 0 1 1.06-1.06l4.5 4.5a.75.75 0 0 1 0 1.06l-4.5 4.5a.75.75 0 1 1-1.06-1.06l3.22-3.22H8.5a.75.75 0 0 1-.75-.75Z"
		clip-rule="evenodd"
	/>
</svg>
