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
		d="M11.75 4a.75.75 0 0 1 .75-.75H20a.748.748 0 0 1 .75.75v7.5a.75.75 0 0 1-1.5 0V5.81l-8.72 8.72a.75.75 0 1 1-1.06-1.06l8.72-8.72H12.5a.75.75 0 0 1-.75-.75ZM5 8.75a.25.25 0 0 0-.25.25v10c0 .138.112.25.25.25h10a.25.25 0 0 0 .25-.25v-7a.75.75 0 0 1 1.5 0v7A1.75 1.75 0 0 1 15 20.75H5A1.75 1.75 0 0 1 3.25 19V9c0-.966.784-1.75 1.75-1.75h7a.75.75 0 0 1 0 1.5H5Z"
		clip-rule="evenodd"
	/>
</svg>
