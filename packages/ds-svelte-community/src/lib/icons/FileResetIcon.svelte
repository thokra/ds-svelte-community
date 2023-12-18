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
		d="M5.25 4.5c0-.69.56-1.25 1.25-1.25H14a.75.75 0 0 1 .53.22l4 4c.141.14.22.331.22.53v11.5c0 .69-.56 1.25-1.25 1.25h-11c-.69 0-1.25-.56-1.25-1.25v-15Zm9.25 4.25c-.69 0-1.25-.56-1.25-1.25V4.75h-6.5v14.5h10.5V8.75H14.5Zm.25-2.94 1.44 1.44h-1.44V5.81Zm-1.625 6.242a2.251 2.251 0 0 0-2.54.198H11a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75v-2a.75.75 0 0 1 1.5 0A3.75 3.75 0 1 1 12 17.75a.75.75 0 1 1 0-1.5 2.249 2.249 0 0 0 1.125-4.198Z"
		clip-rule="evenodd"
	/>
</svg>
