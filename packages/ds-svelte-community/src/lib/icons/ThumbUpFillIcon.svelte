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
		d="M9.876 2.584a.75.75 0 0 1 .624-.334h1.225a2.75 2.75 0 0 1 2.609 3.62l-.793 2.38h5.34a2.75 2.75 0 0 1 2.654 3.474l-1.91 7a2.75 2.75 0 0 1-2.653 2.026H11.5a.749.749 0 0 1-.147-.015l-4.927-.985H3a.75.75 0 0 1-.75-.75V9A.75.75 0 0 1 3 8.25h3.099l3.777-5.666Z"
		clip-rule="evenodd"
	/>
</svg>
