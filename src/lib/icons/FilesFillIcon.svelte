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
		d="M13.25 2.5a.25.25 0 0 0-.25-.25H9.5c-.69 0-1.25.56-1.25 1.25v13c0 .69.56 1.25 1.25 1.25h9c.69 0 1.25-.56 1.25-1.25V9a.25.25 0 0 0-.25-.25h-5c-.69 0-1.25-.56-1.25-1.25v-5Zm1.5.793a.25.25 0 0 1 .427-.177l3.707 3.707a.25.25 0 0 1-.177.427H15a.25.25 0 0 1-.25-.25V3.293ZM6.5 6.25a.25.25 0 0 1 .25.25v10a2.75 2.75 0 0 0 2.75 2.75h6a.25.25 0 0 1 .25.25v1c0 .69-.56 1.25-1.25 1.25h-9c-.69 0-1.25-.56-1.25-1.25v-13c0-.69.56-1.25 1.25-1.25h1Z"
		clip-rule="evenodd"
	/>
</svg>
