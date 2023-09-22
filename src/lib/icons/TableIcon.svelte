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
		d="M6 3.25A2.75 2.75 0 0 0 3.25 6v12A2.75 2.75 0 0 0 6 20.75h12A2.75 2.75 0 0 0 20.75 18V6A2.75 2.75 0 0 0 18 3.25H6Zm9.75 16H18c.69 0 1.25-.56 1.25-1.25V9.75h-3.5v9.5Zm-1.5-9.5v9.5h-4.5v-9.5h4.5Zm.75-1.5h4.25V6c0-.69-.56-1.25-1.25-1.25H6c-.69 0-1.25.56-1.25 1.25v2.25H15Zm-6.75 11v-9.5h-3.5V18c0 .69.56 1.25 1.25 1.25h2.25Z"
		clip-rule="evenodd"
	/>
</svg>
