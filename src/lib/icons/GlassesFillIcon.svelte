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
		d="M5 3.75c-.69 0-1.25.56-1.25 1.25v6.25h16.5V5a1.25 1.25 0 1 0-2.5 0v2h-1.5V5a2.75 2.75 0 1 1 5.5 0v12A1.75 1.75 0 0 1 20 18.75h-5.5A1.75 1.75 0 0 1 12.75 17v-4.25h-1.5V17a1.75 1.75 0 0 1-1.75 1.75H4A1.75 1.75 0 0 1 2.25 17V5a2.75 2.75 0 0 1 5.5 0v2a.75.75 0 0 1-1.5 0V5c0-.69-.56-1.25-1.25-1.25Z"
		clip-rule="evenodd"
	/>
</svg>
