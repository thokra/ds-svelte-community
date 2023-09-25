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
		d="M9.5 4.75a.25.25 0 0 0-.25.25v1.25h5.5V5a.25.25 0 0 0-.25-.25h-5ZM7.75 5v1.25H3.5c-.69 0-1.25.56-1.25 1.25v4c0 .69.56 1.25 1.25 1.25h7.75V11a.75.75 0 0 1 1.5 0v1.75h7.75c.69 0 1.25-.56 1.25-1.25v-4c0-.69-.56-1.25-1.25-1.25h-4.25V5a1.75 1.75 0 0 0-1.75-1.75h-5A1.75 1.75 0 0 0 7.75 5Zm3.5 9.25V15a.75.75 0 0 0 1.5 0v-.75h7.5v4.25c0 .69-.56 1.25-1.25 1.25H5c-.69 0-1.25-.56-1.25-1.25v-4.25h7.5Z"
		clip-rule="evenodd"
	/>
</svg>
