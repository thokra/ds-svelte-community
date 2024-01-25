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
		d="M12 6.25a3.25 3.25 0 1 0 0 6.5 3.25 3.25 0 0 0 0-6.5Zm-2.5 7a.75.75 0 0 0-.75.75v4c0 .414.336.75.75.75h.75V21a.75.75 0 0 0 1.5 0v-2.25h.5V21a.75.75 0 0 0 1.5 0v-2.25h.75a.75.75 0 0 0 .75-.75v-4a.75.75 0 0 0-.75-.75h-5Z"
		clip-rule="evenodd"
	/>
</svg>
