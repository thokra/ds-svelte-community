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
		d="M15.75 10.19V5.75h5.5v3.5H17a.75.75 0 0 0-.53.22l-.72.72Zm-.25-5.94c-.69 0-1.25.56-1.25 1.25V12a.75.75 0 0 0 1.28.53l1.78-1.78h4.19c.69 0 1.25-.56 1.25-1.25v-4c0-.69-.56-1.25-1.25-1.25h-6Zm-7 2a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5ZM4.25 9a4.25 4.25 0 1 1 8.5 0 4.25 4.25 0 0 1-8.5 0Zm4.25 6.75a3.75 3.75 0 0 0-3.727 3.333.75.75 0 1 1-1.49-.166 5.25 5.25 0 0 1 10.435 0 .75.75 0 0 1-1.491.166A3.751 3.751 0 0 0 8.5 15.75Z"
		clip-rule="evenodd"
	/>
</svg>
