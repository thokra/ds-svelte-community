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
		d="M3.25 10.5a7.25 7.25 0 1 1 12.88 4.569l5.41 5.411a.75.75 0 1 1-1.06 1.06l-5.411-5.41A7.25 7.25 0 0 1 3.25 10.5Zm7.25-5.75a5.75 5.75 0 1 0 0 11.5 5.75 5.75 0 0 0 0-11.5Zm0 1.5a.75.75 0 0 1 .75.75v2.75H14a.75.75 0 0 1 0 1.5h-2.75V14a.75.75 0 0 1-1.5 0v-2.75H7a.75.75 0 0 1 0-1.5h2.75V7a.75.75 0 0 1 .75-.75Z"
		clip-rule="evenodd"
	/>
</svg>
