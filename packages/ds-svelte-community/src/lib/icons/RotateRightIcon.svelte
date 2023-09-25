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
		d="M8.97 2.97a.75.75 0 0 1 1.06 0l2.5 2.5a.748.748 0 0 1 0 1.06l-2.5 2.5a.75.75 0 1 1-1.06-1.06l1.22-1.22H7A2.25 2.25 0 0 0 4.75 9v4.5a.75.75 0 0 1-1.5 0V9A3.75 3.75 0 0 1 7 5.25h3.19L8.97 4.03a.75.75 0 0 1 0-1.06ZM13 11.25A1.75 1.75 0 0 0 11.25 13v6c0 .966.784 1.75 1.75 1.75h6A1.75 1.75 0 0 0 20.75 19v-6A1.75 1.75 0 0 0 19 11.25h-6ZM12.75 13a.25.25 0 0 1 .25-.25h6a.25.25 0 0 1 .25.25v6a.25.25 0 0 1-.25.25h-6a.25.25 0 0 1-.25-.25v-6Z"
		clip-rule="evenodd"
	/>
</svg>
