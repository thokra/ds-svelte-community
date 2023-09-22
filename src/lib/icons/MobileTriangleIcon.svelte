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
		d="M16.656 2.136a.75.75 0 0 0-1.312 0l-5 9A.75.75 0 0 0 11 12.25h10a.75.75 0 0 0 .656-1.114l-5-9ZM16 4.044l3.725 6.706h-7.45L16 4.044ZM6.75 5c0-.69.56-1.25 1.25-1.25h4a.75.75 0 0 0 0-1.5H8A2.75 2.75 0 0 0 5.25 5v14A2.75 2.75 0 0 0 8 21.75h8A2.75 2.75 0 0 0 18.75 19v-4.75a.75.75 0 0 0-1.5 0V19c0 .69-.56 1.25-1.25 1.25H8c-.69 0-1.25-.56-1.25-1.25V5Z"
		clip-rule="evenodd"
	/>
</svg>
