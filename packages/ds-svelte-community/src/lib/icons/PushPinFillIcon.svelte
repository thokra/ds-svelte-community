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
		d="M16.312 3.251a1.75 1.75 0 0 0-2.592.13l-3.584 4.38a.25.25 0 0 1-.137.085l-4.41 1.018c-1.339.309-1.815 1.97-.844 2.942l7.449 7.449c.972.972 2.633.495 2.942-.844L16.154 14a.25.25 0 0 1 .085-.137l4.38-3.584a1.75 1.75 0 0 0 .13-2.592L16.312 3.25ZM4.53 20.531 8.06 17 7 15.94l-3.53 3.53a.75.75 0 1 0 1.06 1.06Z"
		clip-rule="evenodd"
	/>
</svg>
