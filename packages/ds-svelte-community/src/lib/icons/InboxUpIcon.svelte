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
		d="M11.47 3.47a.75.75 0 0 1 1.06 0l3.5 3.5a.75.75 0 0 1-1.06 1.06l-2.22-2.22v5.69a.75.75 0 0 1-1.5 0V5.81L9.03 8.03a.75.75 0 0 1-1.06-1.06l3.5-3.5ZM5.304 4.72A.75.75 0 0 1 6 4.25h1a.75.75 0 0 1 0 1.5h-.492l-2.4 6h2.774a1.75 1.75 0 0 1 1.565.967l.947 1.895a.25.25 0 0 0 .224.138h4.764a.25.25 0 0 0 .224-.138l.947-1.895a1.75 1.75 0 0 1 1.565-.967h2.774l-2.4-6H17a.75.75 0 0 1 0-1.5h1a.75.75 0 0 1 .696.471l2.994 7.485a.747.747 0 0 1 .06.311V19a.75.75 0 0 1-.75.75H3a.75.75 0 0 1-.75-.75v-6.483a.745.745 0 0 1 .06-.311L5.304 4.72Zm1.578 8.529a.25.25 0 0 1 .224.138l.947 1.895a1.75 1.75 0 0 0 1.565.967h4.764a1.75 1.75 0 0 0 1.565-.967l.947-1.895a.25.25 0 0 1 .224-.138h3.132v5H3.75v-5h3.132Z"
		clip-rule="evenodd"
	/>
</svg>
