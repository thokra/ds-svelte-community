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
		d="M12 3.25a.75.75 0 0 1 .75.75v5.69l2.22-2.22a.75.75 0 1 1 1.06 1.06l-3.5 3.5a.75.75 0 0 1-1.06 0l-3.5-3.5a.75.75 0 0 1 1.06-1.06l2.22 2.22V4a.75.75 0 0 1 .75-.75ZM5.304 4.721A.75.75 0 0 1 6 4.25h3a.75.75 0 0 1 0 1.5H6.508l-2.4 6h2.774a1.75 1.75 0 0 1 1.565.967l.947 1.895a.25.25 0 0 0 .224.138h4.764a.25.25 0 0 0 .224-.138l.947-1.895a1.75 1.75 0 0 1 1.565-.967h2.774l-2.4-6H15a.75.75 0 0 1 0-1.5h3a.75.75 0 0 1 .696.471l2.994 7.485a.747.747 0 0 1 .06.311V19a.75.75 0 0 1-.75.75H3a.75.75 0 0 1-.75-.75v-6.483a.745.745 0 0 1 .06-.311L5.304 4.72Zm1.578 8.529a.25.25 0 0 1 .224.138l.947 1.895a1.75 1.75 0 0 0 1.565.967h4.764a1.75 1.75 0 0 0 1.565-.967l.947-1.895a.25.25 0 0 1 .224-.138h3.132v5H3.75v-5h3.132Z"
		clip-rule="evenodd"
	/>
</svg>
