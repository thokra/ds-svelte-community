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
		d="M20 20.75a.75.75 0 0 1-.75-.75V4a.75.75 0 0 1 1.5 0v16a.75.75 0 0 1-.75.75ZM17.75 10a.75.75 0 0 1-.75.75H4a.75.75 0 0 1-.75-.75V6A.75.75 0 0 1 4 5.25h13a.75.75 0 0 1 .75.75v4ZM17 18.75a.75.75 0 0 0 .75-.75v-4a.75.75 0 0 0-.75-.75h-7a.75.75 0 0 0-.75.75v4c0 .414.336.75.75.75h7Z"
		clip-rule="evenodd"
	/>
</svg>
