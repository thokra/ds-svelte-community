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
		d="M16.53 7.03a.75.75 0 0 0-1.06-1.06l-5.5 5.5a.75.75 0 0 0 0 1.06l5.5 5.5a.75.75 0 1 0 1.06-1.06L11.56 12l4.97-4.97Zm-4 0a.75.75 0 0 0-1.06-1.06l-5.5 5.5a.75.75 0 0 0 0 1.06l5.5 5.5a.75.75 0 1 0 1.06-1.06L7.56 12l4.97-4.97Z"
		clip-rule="evenodd"
	/>
</svg>
