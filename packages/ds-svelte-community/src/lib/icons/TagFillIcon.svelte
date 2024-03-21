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
		d="M14.324 3.75c-.73 0-1.429.29-1.944.805l-8.207 8.208a1.75 1.75 0 0 0 0 2.474l4.585 4.586a1.75 1.75 0 0 0 2.475 0l8.207-8.207a2.75 2.75 0 0 0 .806-1.944V5.5a1.75 1.75 0 0 0-1.75-1.75h-4.172ZM15.496 10a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
		clip-rule="evenodd"
	/>
</svg>
