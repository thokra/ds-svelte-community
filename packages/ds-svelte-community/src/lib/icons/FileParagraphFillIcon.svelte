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
		d="M13.25 7.5v-4a.25.25 0 0 0-.25-.25H6.5c-.69 0-1.25.56-1.25 1.25v15c0 .69.56 1.25 1.25 1.25h11c.69 0 1.25-.56 1.25-1.25V9a.25.25 0 0 0-.25-.25h-4c-.69 0-1.25-.56-1.25-1.25ZM15 7.25a.25.25 0 0 1-.25-.25V4.293a.25.25 0 0 1 .427-.177l2.707 2.707a.25.25 0 0 1-.177.427H15ZM11.993 9a2.027 2.027 0 0 0-1.99 2.409.301.301 0 0 1-.116.296 1.833 1.833 0 0 0 .399 3.164l1.91.787a.526.526 0 0 1-.201 1.011.53.53 0 0 1-.511-.392.75.75 0 0 0-1.45.385 2.027 2.027 0 0 0 3.952-.901.301.301 0 0 1 .115-.297 1.833 1.833 0 0 0-.399-3.164l-1.91-.786a.526.526 0 1 1 .582-.85.75.75 0 0 0 1.08-1.04A2.026 2.026 0 0 0 11.993 9Zm.654 5.22-1.79-.738a.333.333 0 0 1 .24-.621l.217.078a.922.922 0 0 0 .026.01l1.791.736a.333.333 0 0 1-.24.622l-.217-.079a.64.64 0 0 0-.027-.009Z"
		clip-rule="evenodd"
	/>
</svg>
