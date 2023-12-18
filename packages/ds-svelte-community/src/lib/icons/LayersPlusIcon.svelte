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
		d="M11.575 4.382a.75.75 0 0 1 .85 0l8 5.5a.75.75 0 0 1 0 1.236l-8 5.5a.75.75 0 0 1-.85 0l-8-5.5a.75.75 0 0 1 0-1.236l8-5.5ZM5.324 10.5 12 15.09l6.676-4.59L12 5.91 5.324 10.5Zm-1.942 2.575a.75.75 0 0 1 1.043-.193L12 18.09l7.575-5.208a.75.75 0 0 1 .85 1.236l-8 5.5a.75.75 0 0 1-.85 0l-8-5.5a.75.75 0 0 1-.193-1.043ZM12 7.75a.75.75 0 0 1 .75.75v1.25h1.75a.75.75 0 0 1 0 1.5h-1.75v1.25a.75.75 0 0 1-1.5 0v-1.25H9.5a.75.75 0 0 1 0-1.5h1.75V8.5a.75.75 0 0 1 .75-.75Z"
		clip-rule="evenodd"
	/>
</svg>
