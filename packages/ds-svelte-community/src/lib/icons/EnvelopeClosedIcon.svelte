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
		d="M3 5.25a.75.75 0 0 0-.75.75v13c0 .414.336.75.75.75h18a.75.75 0 0 0 .75-.75V6a.75.75 0 0 0-.75-.75H3Zm.75 11.94 5.273-5.273L3.75 8.4v8.788Zm6.546-4.425L4.81 18.25h14.378l-5.485-5.485-1.288.859a.75.75 0 0 1-.832 0l-1.288-.859Zm4.681-.848L20.25 8.4v8.788l-5.273-5.272Zm-11-5.167L12 12.099l8.023-5.349H3.977Z"
		clip-rule="evenodd"
	/>
</svg>
