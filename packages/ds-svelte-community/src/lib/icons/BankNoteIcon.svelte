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
		d="M3 5.25a.75.75 0 0 0-.75.75v12c0 .414.336.75.75.75h18a.75.75 0 0 0 .75-.75V6a.75.75 0 0 0-.75-.75H3Zm.75 4.425A3.754 3.754 0 0 0 6.675 6.75h10.65a3.755 3.755 0 0 0 2.925 2.925v4.65a3.755 3.755 0 0 0-2.925 2.925H6.675a3.755 3.755 0 0 0-2.925-2.925v-4.65ZM5.122 6.75A2.256 2.256 0 0 1 3.75 8.122V6.75h1.372Zm0 10.5a2.256 2.256 0 0 0-1.372-1.372v1.372h1.372Zm13.756 0a2.257 2.257 0 0 1 1.372-1.372v1.372h-1.372Zm0-10.5c.226.64.733 1.146 1.372 1.372V6.75h-1.372ZM10.25 12c0-1.376.906-2.25 1.75-2.25s1.75.874 1.75 2.25c0 1.377-.906 2.25-1.75 2.25s-1.75-.873-1.75-2.25ZM12 8.25c-1.917 0-3.25 1.813-3.25 3.75s1.333 3.75 3.25 3.75 3.25-1.813 3.25-3.75S13.917 8.25 12 8.25Z"
		clip-rule="evenodd"
	/>
</svg>
