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
		d="M6.51 4.75H6a.75.75 0 0 1 0-1.5h12a.75.75 0 0 1 0 1.5h-.51l-.318 3.771a.25.25 0 0 1-.25.229H7.077a.25.25 0 0 1-.249-.229L6.51 4.75ZM5.25 11a.75.75 0 0 1 .75-.75h12a.75.75 0 0 1 .75.75c0 1.56-1.216 2.949-2.81 3.796l.799 4.575a.75.75 0 0 1-.739.879H8a.75.75 0 0 1-.739-.88l.8-4.574C6.466 13.948 5.25 12.56 5.25 11Z"
		clip-rule="evenodd"
	/>
</svg>
