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
		d="M4 6.25a.75.75 0 0 0-.75.75v10a.75.75 0 0 0 1.5 0V7A.75.75 0 0 0 4 6.25Zm9.75 3.064-1.767 1.262a1.75 1.75 0 0 0 0 2.848l1.767 1.262V17a.75.75 0 0 1-1.186.61l-7-5a.75.75 0 0 1 0-1.22l7-5A.75.75 0 0 1 13.75 7v2.314Zm5.814-2.924A.75.75 0 0 1 20.75 7v10a.75.75 0 0 1-1.186.61l-7-5a.75.75 0 0 1 0-1.22l7-5Z"
		clip-rule="evenodd"
	/>
</svg>
