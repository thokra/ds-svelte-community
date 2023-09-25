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
		d="M10 4.75a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm2.25.75a2.25 2.25 0 0 1-1.5 2.122v4.628H12A4.25 4.25 0 0 0 16.25 8v-.378a2.25 2.25 0 1 1 1.5 0V8A5.75 5.75 0 0 1 12 13.75h-1.25v2.628a2.251 2.251 0 1 1-1.5 0V7.622a2.25 2.25 0 1 1 3-2.122Zm4.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm-7 11.5h-.006a.75.75 0 1 0 .012 0H10Z"
		clip-rule="evenodd"
	/>
</svg>
