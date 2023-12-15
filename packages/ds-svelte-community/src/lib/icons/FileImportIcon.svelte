<script lang="ts" context="module">
	import newUniqueId from "locally-unique-id-generator";
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
		d="M17.25 17.75a.75.75 0 0 1 1.5 0v1.75c0 .69-.56 1.25-1.25 1.25h-11c-.69 0-1.25-.56-1.25-1.25v-15c0-.69.56-1.25 1.25-1.25H14a.75.75 0 0 1 .53.22l4 4c.141.14.22.331.22.53v2.25a.75.75 0 0 1-1.5 0v-1.5H14.5c-.69 0-1.25-.56-1.25-1.25V4.75h-6.5v14.5h10.5v-1.5Zm-2.5-11.94 1.44 1.44h-1.44V5.81Zm-1.22 4.41a.75.75 0 0 1 0 1.06l-1.97 1.97H18a.75.75 0 0 1 0 1.5h-6.44l1.97 1.97a.75.75 0 1 1-1.06 1.06l-3.25-3.25a.75.75 0 0 1 0-1.06l3.25-3.25a.75.75 0 0 1 1.06 0Z"
		clip-rule="evenodd"
	/>
</svg>
