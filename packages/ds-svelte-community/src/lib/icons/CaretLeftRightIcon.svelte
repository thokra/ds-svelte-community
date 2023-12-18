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
		d="M16.03 7.97a.75.75 0 0 0-1.28.53v7a.75.75 0 0 0 1.28.53l3.5-3.5a.75.75 0 0 0 0-1.06l-3.5-3.5ZM17.94 12l-1.69 1.69v-3.38L17.94 12ZM9.25 8.5a.75.75 0 0 0-1.28-.53l-3.5 3.5a.75.75 0 0 0 0 1.06l3.5 3.5a.75.75 0 0 0 1.28-.53v-7Zm-1.5 5.19L6.06 12l1.69-1.69v3.38Z"
		clip-rule="evenodd"
	/>
</svg>
