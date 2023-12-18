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
		d="M4.25 4A.75.75 0 0 1 5 3.25h14a.75.75 0 0 1 .75.75v8.25H20a.75.75 0 0 1 .721.956l-2 7a.75.75 0 0 1-.721.544H6a.75.75 0 0 1-.721-.544l-2-7A.75.75 0 0 1 4 12.25h.25V4Zm.744 9.75 1.572 5.5h10.868l1.572-5.5H4.994Zm12.745-1.5A2.75 2.75 0 0 0 13.5 9.695 2.74 2.74 0 0 0 12 9.25c-.553 0-1.069.163-1.5.445a2.75 2.75 0 0 0-4.24 2.555h-.51v-4.5h12.5v4.5h-.511ZM9 10.75c.178 0 .347.037.5.104a2.74 2.74 0 0 0-.239 1.396H7.775A1.25 1.25 0 0 1 9 10.75Zm3.261 1.5a2.758 2.758 0 0 1 .239-1.396 1.25 1.25 0 0 0-1.725 1.396h1.486ZM16.25 12c0 .086-.009.17-.025.25h-2.45A1.25 1.25 0 1 1 16.25 12Zm2-7.25v1.5H5.75v-1.5h12.5ZM10 15.25a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5h-4Z"
		clip-rule="evenodd"
	/>
</svg>
