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
		d="M11.353 3.265a.75.75 0 0 1 .147-.015h5.472c1.24 0 2.327.83 2.653 2.026l1.91 7a2.75 2.75 0 0 1-2.654 3.474h-5.34l.793 2.38a2.75 2.75 0 0 1-2.609 3.62H10.5a.75.75 0 0 1-.624-.334L6.099 15.75H3a.75.75 0 0 1-.75-.75V5A.75.75 0 0 1 3 4.25h3.426l4.927-.985Z"
		clip-rule="evenodd"
	/>
</svg>
