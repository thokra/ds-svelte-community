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
		d="M3.25 10.5a7.25 7.25 0 1 1 12.88 4.568l5.412 5.412a.75.75 0 0 1-1.061 1.06l-5.412-5.41A7.25 7.25 0 0 1 3.25 10.5Zm3 0A.75.75 0 0 1 7 9.75h7a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1-.75-.75Z"
		clip-rule="evenodd"
	/>
</svg>
