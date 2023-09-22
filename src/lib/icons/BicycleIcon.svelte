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
		d="M16.75 6a.75.75 0 0 0-.75-.75h-2a.75.75 0 0 0-.685 1.055l1.329 2.99-2.37 2.371L10.63 9.75H11a.75.75 0 0 0 0-1.5H8a.75.75 0 0 0 0 1.5h.655l2.554 2.98-.579.58-1.173.234a3.751 3.751 0 1 0 .293 1.47l1.397-.279a.75.75 0 0 0 .383-.205l3.767-3.766.525 1.183a3.75 3.75 0 1 0 1.37-.61L15.155 6.75H16a.75.75 0 0 0 .75-.75Zm-8.817 7.848-2.08.417a.75.75 0 1 0 .294 1.47l2.08-.416a2.25 2.25 0 1 1-.294-1.47ZM15.75 15c0-.643.27-1.224.703-1.634l.862 1.939a.75.75 0 0 0 1.37-.61l-.861-1.938A2.25 2.25 0 1 1 15.75 15Z"
		clip-rule="evenodd"
	/>
</svg>
