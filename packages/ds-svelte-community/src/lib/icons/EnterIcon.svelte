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
		d="M15.5 3.25a.75.75 0 0 0 0 1.5H19a.25.25 0 0 1 .25.25v14a.25.25 0 0 1-.25.25h-3.5a.75.75 0 0 0 0 1.5H19A1.75 1.75 0 0 0 20.75 19V5A1.75 1.75 0 0 0 19 3.25h-3.5ZM9.97 6.97a.75.75 0 0 1 1.06 0l4.5 4.5a.75.75 0 0 1 0 1.06l-4.5 4.5a.75.75 0 1 1-1.06-1.06l3.22-3.22H3.5a.75.75 0 0 1 0-1.5h9.69L9.97 8.03a.75.75 0 0 1 0-1.06Z"
		clip-rule="evenodd"
	/>
</svg>
