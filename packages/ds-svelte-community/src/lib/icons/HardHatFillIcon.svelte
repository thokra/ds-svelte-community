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
		d="M9.75 10V6.012c0-.004 0-.01.002-.018a1.178 1.178 0 0 1 .223-.544c.204-.272.708-.7 2.025-.7s1.82.428 2.025.7a1.179 1.179 0 0 1 .225.562V10a.75.75 0 0 0 1.5 0V5.805c0-.164.156-.284.313-.234A6.753 6.753 0 0 1 20.75 12v4.764c0 .039.009.077.026.112l.533 1.065a1.25 1.25 0 0 1-1.118 1.809H3.809a1.25 1.25 0 0 1-1.118-1.809l.532-1.065a.25.25 0 0 0 .027-.112V12a6.753 6.753 0 0 1 4.687-6.43c.157-.05.313.07.313.235V10a.75.75 0 0 0 1.5 0Zm.25 3.25a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5h-4Z"
		clip-rule="evenodd"
	/>
</svg>
