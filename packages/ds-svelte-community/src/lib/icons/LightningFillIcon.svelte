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
		d="M14.32 2.322a.75.75 0 0 1 .405.871l-1.638 6.143 4.483.417a.75.75 0 0 1 .54 1.183l-7.5 10.5a.75.75 0 0 1-1.335-.63l1.638-6.142-4.483-.417a.75.75 0 0 1-.54-1.183l7.5-10.5a.75.75 0 0 1 .93-.242Z"
		clip-rule="evenodd"
	/>
</svg>
