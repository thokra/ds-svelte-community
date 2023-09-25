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
		d="M6 19.25a.75.75 0 0 1-.75-.75v-5.75H4a.75.75 0 0 1 0-1.5h1.25V5.5A.75.75 0 0 1 6 4.75h4a.75.75 0 0 1 .75.75v5.75h2.5V8.5a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 .75.75v2.75H20a.75.75 0 0 1 0 1.5h-1.25v2.75a.75.75 0 0 1-.75.75h-4a.75.75 0 0 1-.75-.75v-2.75h-2.5v5.75a.75.75 0 0 1-.75.75H6Z"
		clip-rule="evenodd"
	/>
</svg>
