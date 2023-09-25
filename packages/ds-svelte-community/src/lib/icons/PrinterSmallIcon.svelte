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
		d="M6.25 3A.75.75 0 0 1 7 2.25h10a.75.75 0 0 1 .75.75v4.25H20c.966 0 1.75.784 1.75 1.75v9a.75.75 0 0 1-.75.75h-3.25V21a.75.75 0 0 1-.75.75H7a.75.75 0 0 1-.75-.75v-2.25H3a.75.75 0 0 1-.75-.75V9c0-.966.784-1.75 1.75-1.75h2.25V3Zm0 14.25V12a.75.75 0 0 1 .75-.75h10a.75.75 0 0 1 .75.75v5.25h2.5V9a.25.25 0 0 0-.25-.25H4a.25.25 0 0 0-.25.25v8.25h2.5Zm10-13.5v3.5h-8.5v-3.5h8.5Zm-8.5 16.5v-7.5h8.5v7.5h-8.5ZM9.25 15a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75Zm.75 2.25a.75.75 0 0 0 0 1.5h2.5a.75.75 0 0 0 0-1.5H10Z"
		clip-rule="evenodd"
	/>
</svg>
