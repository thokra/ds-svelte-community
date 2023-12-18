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
		d="M5.25 4.5c0-.69.56-1.25 1.25-1.25H14a.75.75 0 0 1 .53.22l4 4c.141.14.22.331.22.53v11.5c0 .69-.56 1.25-1.25 1.25h-11c-.69 0-1.25-.56-1.25-1.25v-15Zm9.25 4.25c-.69 0-1.25-.56-1.25-1.25V4.75h-6.5v14.5h10.5V8.75H14.5Zm.25-2.94 1.44 1.44h-1.44V5.81ZM12 11.13a.75.75 0 0 1 .75.75v1.371h1.371a.75.75 0 0 1 0 1.5H12.75v1.371a.75.75 0 0 1-1.5 0V14.75H9.879a.75.75 0 0 1 0-1.5h1.371v-1.371a.75.75 0 0 1 .75-.75Z"
		clip-rule="evenodd"
	/>
</svg>
