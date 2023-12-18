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
		d="M9.75 3a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75v5.103l4.419-2.552a.75.75 0 0 1 1.024.275l1.5 2.598a.75.75 0 0 1-.274 1.025L16.499 12l4.42 2.551a.75.75 0 0 1 .274 1.025l-1.5 2.598a.75.75 0 0 1-1.024.275l-4.42-2.552V21a.75.75 0 0 1-.75.75h-3a.75.75 0 0 1-.75-.75v-5.103L5.332 18.45a.75.75 0 0 1-1.025-.275l-1.5-2.598a.75.75 0 0 1 .275-1.025L7.5 12 3.08 9.449a.75.75 0 0 1-.274-1.025l1.5-2.598a.75.75 0 0 1 1.025-.275L9.75 8.103V3Z"
		clip-rule="evenodd"
	/>
</svg>
