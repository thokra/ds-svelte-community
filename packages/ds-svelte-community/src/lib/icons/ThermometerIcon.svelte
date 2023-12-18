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
		d="M12 2.25A2.25 2.25 0 0 0 9.75 4.5V15a3.75 3.75 0 1 0 4.5 0V4.5A2.25 2.25 0 0 0 12 2.25Zm-.75 2.25a.75.75 0 1 1 1.5 0v10.9a.75.75 0 0 0 .374.65A2.249 2.249 0 0 1 12 20.25a2.25 2.25 0 0 1-1.124-4.2.75.75 0 0 0 .374-.649V4.5Zm.75 12a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z"
		clip-rule="evenodd"
	/>
</svg>
