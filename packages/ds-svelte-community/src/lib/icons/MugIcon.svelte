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
		d="M5 5.25a.75.75 0 0 0-.75.75v9A4.75 4.75 0 0 0 9 19.75h4A4.75 4.75 0 0 0 17.75 15v-.337a3.25 3.25 0 1 0 0-6.326V6a.75.75 0 0 0-.75-.75H5Zm11.25 4.242V15A3.25 3.25 0 0 1 13 18.25H9A3.25 3.25 0 0 1 5.75 15V6.75h10.5v2.742Zm1.5 3.59V9.918a1.75 1.75 0 1 1 0 3.164Z"
		clip-rule="evenodd"
	/>
</svg>
