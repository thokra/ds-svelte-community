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
		d="M21.478 11.361a6.635 6.635 0 0 1 .165.252.751.751 0 0 1 0 .773l-.046.075a10.384 10.384 0 0 1-.573.79 12.95 12.95 0 0 1-1.794 1.825c-1.593 1.328-4.007 2.674-7.23 2.674-3.222 0-5.637-1.346-7.23-2.674a12.844 12.844 0 0 1-1.793-1.826 10.413 10.413 0 0 1-.606-.84.771.771 0 0 1-.014-.796l.047-.074a10.456 10.456 0 0 1 .573-.79c.4-.5.997-1.163 1.793-1.826C6.363 7.596 8.778 6.25 12 6.25c3.223 0 5.637 1.346 7.23 2.674a12.846 12.846 0 0 1 1.793 1.826c.2.25.352.46.455.611ZM12 9.25a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5ZM7.75 12a4.25 4.25 0 1 1 8.5 0 4.25 4.25 0 0 1-8.5 0ZM12 10.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z"
		clip-rule="evenodd"
	/>
</svg>
