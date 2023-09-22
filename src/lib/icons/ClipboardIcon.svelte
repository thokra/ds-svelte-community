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
		d="M11.47 2.47a.75.75 0 0 1 1.06 0l2 2A.75.75 0 0 1 14 5.75h-4a.75.75 0 0 1-.53-1.28l2-2Zm.72 1.78L12 4.06l-.19.19h.38ZM5.25 4A.75.75 0 0 1 6 3.25h2a.75.75 0 0 1 0 1.5H6.75v15.5h10.5V4.75H16a.75.75 0 0 1 0-1.5h2a.75.75 0 0 1 .75.75v17a.75.75 0 0 1-.75.75H6a.75.75 0 0 1-.75-.75V4ZM9 10.25a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5H9ZM8.25 14a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75ZM9 16.25a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5H9Z"
		clip-rule="evenodd"
	/>
</svg>
