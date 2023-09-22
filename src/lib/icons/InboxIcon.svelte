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
		d="M6 4.25a.75.75 0 0 0-.696.471L2.31 12.206a.742.742 0 0 0-.06.311V19c0 .414.336.75.75.75h18a.75.75 0 0 0 .75-.75v-6.483a.745.745 0 0 0-.06-.311L18.696 4.72A.75.75 0 0 0 18 4.25H6Zm13.892 7.5-2.4-6H6.508l-2.4 6h2.774a1.75 1.75 0 0 1 1.565.967l.947 1.895a.25.25 0 0 0 .224.138h4.764a.25.25 0 0 0 .224-.138l.947-1.895a1.75 1.75 0 0 1 1.565-.967h2.774ZM3.75 18.25v-5h3.132a.25.25 0 0 1 .224.138l.947 1.895a1.75 1.75 0 0 0 1.565.967h4.764a1.75 1.75 0 0 0 1.565-.967l.947-1.895a.25.25 0 0 1 .224-.138h3.132v5H3.75Z"
		clip-rule="evenodd"
	/>
</svg>
