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
		d="M11 2.25a.75.75 0 0 0-.75.75v7.5c0 .138.112.25.25.25H13A2.25 2.25 0 0 1 15.25 13v8.5c0 .138.112.25.25.25H21a.75.75 0 0 0 .75-.75V3a.75.75 0 0 0-.75-.75H11Zm7 2.5a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0v-1a.75.75 0 0 1 .75-.75Zm.75 4.75a.75.75 0 0 0-1.5 0v1a.75.75 0 0 0 1.5 0v-1ZM18 12.75a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0v-1a.75.75 0 0 1 .75-.75Zm-15-.5a.75.75 0 0 0-.75.75v8c0 .414.336.75.75.75h10a.75.75 0 0 0 .75-.75v-8a.75.75 0 0 0-.75-.75H3Zm2.5 3a.75.75 0 0 0 0 1.5h1a.75.75 0 0 0 0-1.5h-1Zm2.25.75a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75Z"
		clip-rule="evenodd"
	/>
</svg>
