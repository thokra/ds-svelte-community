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
		d="M6.75 19.25V4.75h6.5V7.5c0 .69.56 1.25 1.25 1.25h2.75v10.263l-3.62-5.429a.75.75 0 0 0-1.248 0L8.605 19.25H6.75Zm2.245 1.5a.8.8 0 0 0 .022 0h7.98a.8.8 0 0 0 .021 0h.482c.69 0 1.25-.56 1.25-1.25V8a.75.75 0 0 0-.22-.53l-4-4a.75.75 0 0 0-.53-.22H6.5c-.69 0-1.25.56-1.25 1.25v15c0 .69.56 1.25 1.25 1.25h2.495Zm6.61-1.5h-5.197l2.598-3.898 2.599 3.898Zm.584-12L14.75 5.81v1.44h1.44ZM10 9.75a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm-2.25.75a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0Z"
		clip-rule="evenodd"
	/>
</svg>
