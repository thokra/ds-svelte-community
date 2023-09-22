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
		d="M3.75 6c0-.69.56-1.25 1.25-1.25h14c.69 0 1.25.56 1.25 1.25v12c0 .69-.56 1.25-1.25 1.25H5c-.69 0-1.25-.56-1.25-1.25V6ZM5 3.25A2.75 2.75 0 0 0 2.25 6v12A2.75 2.75 0 0 0 5 20.75h14A2.75 2.75 0 0 0 21.75 18V6A2.75 2.75 0 0 0 19 3.25H5Zm5.5 2.5a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5h-3Z"
		clip-rule="evenodd"
	/>
</svg>
