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
		d="M13.952 5.183a.638.638 0 1 1 .929.875L13.47 7.47a.75.75 0 0 0 .916 1.173l3.622-2.173a.619.619 0 0 1 .673 1.038l-4.111 2.878a.75.75 0 0 0 .337 1.358l2.049.256a1.93 1.93 0 0 1 1.658 1.569l.377 2.075a.742.742 0 1 1-1.465.238l-.24-1.682a1.144 1.144 0 0 0-1.019-.977l-3.593-.36a1.75 1.75 0 0 0-1.924 1.742v.99c0 .897.675 1.651 1.567 1.75l2.192.244a.833.833 0 0 1-.092 1.661h-2.194a.194.194 0 0 1-.087-.02l-3.8-1.9A.75.75 0 0 0 8 17.25H6.75V9.285l3.148-3.541a.579.579 0 1 1 .865.769L9.44 8.002a.75.75 0 1 0 1.122.996l1.323-1.489 2.068-2.326ZM5.663 8.25l3.114-3.503a2.079 2.079 0 0 1 3.313.272l.741-.833a2.138 2.138 0 0 1 2.275-.608l-.237.712.237-.712a2.132 2.132 0 0 1 1.463 2.006l.667-.4a2.119 2.119 0 0 1 2.305 3.553l-2.515 1.76.116.015A3.428 3.428 0 0 1 20.09 13.3l.377 2.076a2.242 2.242 0 1 1-4.425.718l-.201-1.406-3.316-.332a.25.25 0 0 0-.275.249v.99c0 .133.1.245.233.26l2.192.243a2.333 2.333 0 0 1-.258 4.652h-2.194a1.69 1.69 0 0 1-.758-.179L7.823 18.75H3.5a.75.75 0 0 1-.75-.75V9a.75.75 0 0 1 .75-.75h2.163Zm-1.413 9v-7.5h1v7.5h-1Z"
		clip-rule="evenodd"
	/>
</svg>
