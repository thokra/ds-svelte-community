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
		d="M9.75 3a.75.75 0 0 0-1.5 0v1.25H4.5c-.69 0-1.25.56-1.25 1.25v13c0 .69.56 1.25 1.25 1.25h15c.69 0 1.25-.56 1.25-1.25v-13c0-.69-.56-1.25-1.25-1.25h-3.75V3a.75.75 0 0 0-1.5 0v1.25h-4.5V3Zm-5 2.75h3.5V7a.75.75 0 0 0 1.5 0V5.75h4.5V7a.75.75 0 0 0 1.5 0V5.75h3.5v3.5H4.75v-3.5Zm0 5v7.5h14.5v-7.5H4.75Zm2 2.25a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75Zm4.75-.75a.75.75 0 0 0 0 1.5h1a.75.75 0 0 0 0-1.5h-1Zm3.25.75a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75Zm-3.25 2.25a.75.75 0 0 0 0 1.5h1a.75.75 0 0 0 0-1.5h-1Zm3.25.75a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75Zm-7.25-.75a.75.75 0 0 0 0 1.5h1a.75.75 0 0 0 0-1.5h-1Z"
		clip-rule="evenodd"
	/>
</svg>
