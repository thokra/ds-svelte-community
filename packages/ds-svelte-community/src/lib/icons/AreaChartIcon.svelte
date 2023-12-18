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
		d="M2.352 4.621a.752.752 0 0 1 1.134-.192l6.766 5.69 10.43-4.8A.75.75 0 0 1 21.75 6v3.984l.001.008V19a.75.75 0 0 1-.75.75H3a.75.75 0 0 1-.75-.75V5.005l.102-.384Zm7.299 6.953L3.75 6.611v8.048l3.27-2.007a.75.75 0 0 1 .859.052l2.346 1.863 10.025-5.03V7.17l-9.803 4.512a.75.75 0 0 1-.796-.107Zm.819 4.548 9.78-4.907v7.035H3.75v-1.83l3.607-2.215 2.31 1.834a.75.75 0 0 0 .803.083Z"
		clip-rule="evenodd"
	/><path fill="currentColor" d="M2.25 5.005V5a.756.756 0 0 1 0 .005Z" />
</svg>
