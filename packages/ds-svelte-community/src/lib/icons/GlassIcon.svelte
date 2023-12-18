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
		d="M6.5 3.25a.75.75 0 0 0-.749.797l.883 14.125A2.75 2.75 0 0 0 9.38 20.75h5.242a2.75 2.75 0 0 0 2.745-2.578l.883-14.125a.75.75 0 0 0-.749-.797h-11Zm.955 4-.157-2.5h9.404l-.157 2.5h-9.09Zm.093 1.5.583 9.328A1.25 1.25 0 0 0 9.38 19.25h5.242a1.25 1.25 0 0 0 1.248-1.172l.583-9.328H7.548Z"
		clip-rule="evenodd"
	/>
</svg>
