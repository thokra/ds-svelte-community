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
		d="M9.75 2.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5h-.75v1.036a7.713 7.713 0 0 1 4.117 1.683l.863-.863-.265-.266a.75.75 0 1 1 1.06-1.06l1.592 1.59a.75.75 0 0 1-1.06 1.061l-.266-.265-.853.853a7.716 7.716 0 0 1 1.776 4.231h1.036v-.75a.75.75 0 0 1 1.5 0v3a.75.75 0 0 1-1.5 0v-.75h-1.036a7.712 7.712 0 0 1-1.618 4.036l.695.694.265-.265a.75.75 0 0 1 1.06 1.06l-1.59 1.592a.75.75 0 0 1-1.06-1.061l.264-.265-.67-.67a7.717 7.717 0 0 1-4.31 1.843v1.036h.75a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1 0-1.5h.75v-1.036a7.716 7.716 0 0 1-4.23-1.776l-.603.603.265.265a.75.75 0 1 1-1.061 1.06l-1.591-1.59a.75.75 0 1 1 1.06-1.061l.266.265.613-.613a7.714 7.714 0 0 1-1.683-4.117H3.25v.75a.75.75 0 0 1-1.5 0v-3a.75.75 0 0 1 1.5 0v.75h1.036a7.717 7.717 0 0 1 1.843-4.31l-.773-.773-.265.265A.75.75 0 1 1 4.03 5.37l1.591-1.59a.75.75 0 0 1 1.06 1.06l-.265.266.798.798a7.712 7.712 0 0 1 4.036-1.618V3.25h-.75a.75.75 0 0 1-.75-.75ZM12 5.75a6.25 6.25 0 1 0 0 12.5 6.25 6.25 0 0 0 0-12.5ZM8.75 11a.75.75 0 1 1 1.5 0 .75.75 0 0 1-1.5 0Zm.75-2.25a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM15 9a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm-3.5 6.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z"
		clip-rule="evenodd"
	/>
</svg>
