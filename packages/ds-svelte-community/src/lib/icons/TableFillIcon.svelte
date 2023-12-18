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
		d="M6 3.25A2.75 2.75 0 0 0 3.25 6v2c0 .138.112.25.25.25h17a.25.25 0 0 0 .25-.25V6A2.75 2.75 0 0 0 18 3.25H6ZM14.25 10a.25.25 0 0 0-.25-.25h-4a.25.25 0 0 0-.25.25v10.5c0 .138.112.25.25.25h4a.25.25 0 0 0 .25-.25V10ZM16 20.75a.25.25 0 0 1-.25-.25V10a.25.25 0 0 1 .25-.25h4.5a.25.25 0 0 1 .25.25v8A2.75 2.75 0 0 1 18 20.75h-2ZM3.25 10a.25.25 0 0 1 .25-.25H8a.25.25 0 0 1 .25.25v10.5a.25.25 0 0 1-.25.25H6A2.75 2.75 0 0 1 3.25 18v-8Z"
		clip-rule="evenodd"
	/>
</svg>
