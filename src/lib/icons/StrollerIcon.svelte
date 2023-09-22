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
		d="M14 2.75a.75.75 0 0 0-.75.75v3.75h-6.5V6.5A3.25 3.25 0 0 0 3.5 3.25a.75.75 0 0 0 0 1.5c.966 0 1.75.784 1.75 1.75V9c0 1.557.255 2.997 1.015 4.06.796 1.115 2.05 1.69 3.735 1.69h6c1.685 0 2.94-.575 3.735-1.69.76-1.063 1.015-2.503 1.015-4.06v-.5c0-2.114-.531-3.648-1.8-4.6-1.21-.908-2.931-1.15-4.95-1.15ZM14.75 8H14h.75V4.263c1.561.06 2.615.322 3.3.836.731.548 1.2 1.514 1.2 3.4V9c0 1.443-.245 2.503-.735 3.19-.454.635-1.2 1.06-2.515 1.06h-6c-1.315 0-2.06-.425-2.515-1.06-.49-.687-.735-1.747-.735-3.19v-.25H14a.75.75 0 0 0 .75-.75Zm.5 10.5a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0Zm1.25-2.75a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5Zm-7 1.5a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5ZM6.75 18.5a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0Z"
		clip-rule="evenodd"
	/>
</svg>
