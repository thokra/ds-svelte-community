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
		d="M7.125 3.556a.75.75 0 0 1 1.025.275l3 5.196a.75.75 0 0 1-1.3.75l-3-5.196a.75.75 0 0 1 .275-1.025ZM3 12.75h6a.75.75 0 0 0 0-1.5H3a.75.75 0 0 0 0 1.5Zm18-1.5h-6a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5Zm-6.85 2.973a.75.75 0 0 0-1.3.75l3 5.196a.75.75 0 0 0 1.3-.75l-3-5.196Zm2.725-10.667a.75.75 0 0 1 .274 1.025l-3 5.196a.75.75 0 1 1-1.298-.75l3-5.196a.75.75 0 0 1 1.024-.275Zm-5.726 11.417a.75.75 0 0 0-1.299-.75l-3 5.196a.75.75 0 1 0 1.3.75l3-5.196Z"
		clip-rule="evenodd"
	/>
</svg>
