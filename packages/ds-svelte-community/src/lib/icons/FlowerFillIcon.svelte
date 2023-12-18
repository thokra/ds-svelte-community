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
		d="M5.25 8.5a6.75 6.75 0 1 1 7.5 6.709V21.5a.75.75 0 0 1-1.5 0v-6.291a6.751 6.751 0 0 1-6-6.709ZM3.5 14.25a.75.75 0 0 0-.75.75c0 1.631.41 2.904 1.063 3.885.65.975 1.513 1.616 2.352 2.036a8.122 8.122 0 0 0 2.274.725 8.124 8.124 0 0 0 .969.102l.092.002a.75.75 0 0 0 .75-.75c0-1.631-.41-2.904-1.063-3.885-.65-.975-1.513-1.616-2.352-2.036a8.122 8.122 0 0 0-2.274-.725A6.532 6.532 0 0 0 3.5 14.25Zm17 0a.75.75 0 0 1 .75.75c0 1.631-.41 2.904-1.064 3.885-.65.975-1.512 1.616-2.35 2.036a8.121 8.121 0 0 1-2.275.725 8.125 8.125 0 0 1-.969.102l-.092.002a.75.75 0 0 1-.75-.75c0-1.631.41-2.904 1.063-3.885.65-.975 1.513-1.616 2.352-2.036a8.121 8.121 0 0 1 2.274-.725 8.125 8.125 0 0 1 .969-.102l.092-.002Z"
		clip-rule="evenodd"
	/>
</svg>
