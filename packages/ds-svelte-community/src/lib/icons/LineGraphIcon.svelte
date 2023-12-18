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
		d="M20.276 8.59a.75.75 0 0 1-.216 1.038l-6.942 4.544a.75.75 0 0 1-.822 0L9.29 12.204l-5.23 3.423a.75.75 0 1 1-.822-1.255L8.88 10.68a.75.75 0 0 1 .822 0l3.006 1.968 6.531-4.276a.75.75 0 0 1 1.038.217Z"
		clip-rule="evenodd"
	/>
</svg>
