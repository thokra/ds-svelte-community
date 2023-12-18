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
		d="M10.709 2.269C7.436 1.765 4.436 3.804 3.547 6.8c-.384 1.294.02 2.607.328 3.611.224.725.407 1.517.407 2.121 0 .604-.183 1.396-.407 2.121l-.018.06a.232.232 0 0 0 .387.237l2.89-2.89c.116-.116.063-.31-.102-.31a.75.75 0 0 1-.75-.75V9.231a3.417 3.417 0 0 1 5.779-2.47.265.265 0 0 0 .37.002l2.09-2.089a.243.243 0 0 0 .012-.334 6.407 6.407 0 0 0-3.824-2.071Zm5.205 8.19c.011-.04-.038-.07-.068-.04L5.717 20.55a.24.24 0 0 0 .036.372 5.326 5.326 0 0 0 7.964-2.994l2.197-7.467ZM11.02 8.175c.091-.09.1-.237.007-.326a1.917 1.917 0 0 0-3.245 1.384v.933c0 .111.075.209.18.246.13.047.256.104.377.17a.266.266 0 0 0 .315-.041l2.366-2.366Zm7.24-2.644a.75.75 0 0 0-1.06-1.06l-15 15a.75.75 0 1 0 1.06 1.06l15-15Zm.49 11.22H20a.75.75 0 0 0 0-1.5h-4a.75.75 0 0 0 0 1.5h1.25V21a.75.75 0 0 0 1.5 0v-4.25Z"
		clip-rule="evenodd"
	/>
</svg>
